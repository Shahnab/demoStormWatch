
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TornadoData, MapConfig } from '../types';
import { TornadoMaterial } from '../three/TornadoMaterial';
import { StormSkyMaterial } from '../three/StormSkyMaterial';
import { DebrisMaterial } from '../three/DebrisMaterial';

// declare topojson global if loaded via script tag
declare const topojson: any;

interface MapSceneProps {
  config: MapConfig;
  tornadoes: TornadoData[];
  locationName: string;
  playbackProgress: number; // 0.0 to 1.0
}

const MapScene: React.FC<MapSceneProps> = ({ config, tornadoes, locationName, playbackProgress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandingLabelRef = useRef<HTMLDivElement>(null);
  
  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  // Lighting References
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const skyMaterialRef = useRef<StormSkyMaterial | null>(null);

  // Group References
  const tilesGroupRef = useRef<THREE.Group | null>(null);
  const boundariesGroupRef = useRef<THREE.Group | null>(null);
  const tornadoGroupRef = useRef<THREE.Group | null>(null);
  const tracksGroupRef = useRef<THREE.Group | null>(null);

  // State
  const loadedTilesRef = useRef<Map<string, any>>(new Map());
  const tornadoMaterialsRef = useRef<TornadoMaterial[]>([]);
  const debrisMaterialsRef = useRef<DebrisMaterial[]>([]);
  const animationFrameRef = useRef<number>(0);
  const boundariesLoadedRef = useRef<boolean>(false);
  
  // Maps tornado IDs to their computed CatmullRom curves
  const tornadoPathsRef = useRef<Map<string, THREE.CatmullRomCurve3>>(new Map());
  
  // Constants
  const ZOOM_LEVEL = 10;
  const KM_PER_TILE = 39.1;
  const FLOOR_HEIGHT = 0;
  const ALTITUDE_SCALE = 1.0;

  
  const latLonToCartesian = (lat: number, lon: number, altitude: number = 0, centerLat: number, centerLon: number) => {
    const x = (lon - centerLon) * 111.32 * Math.cos(centerLat * Math.PI / 180);
    const z = -(lat - centerLat) * 111.32; 
    const y = (altitude - FLOOR_HEIGHT) * ALTITUDE_SCALE / 1000;
    return new THREE.Vector3(x, y, z);
  };

  const latLonToTile = (lat: number, lon: number, zoom: number) => {
    const latRad = lat * Math.PI / 180;
    const n = Math.pow(2, zoom);
    const x = Math.floor((lon + 180) / 360 * n);
    const y = Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n);
    return { x, y };
  };

  const tileToLatLon = (x: number, y: number, zoom: number) => {
    const n = Math.pow(2, zoom);
    const lon = x / n * 360 - 180;
    const latRad = Math.atan(Math.sinh(Math.PI * (1 - 2 * y / n)));
    const lat = latRad * 180 / Math.PI;
    return { lat, lon };
  };

  const getTileKey = (x: number, y: number, zoom: number) => `${zoom}_${x}_${y}`;

  // Initialization
  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    // Use a neutral/bright background instead of dark storm color
    scene.background = new THREE.Color(0xaaccff); 
    // Removed Fog to ensure map is clear and bright everywhere
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 30, 60); 
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    // Standard Tone Mapping for realistic brightness
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1.0;
    
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // Keep above ground
    controlsRef.current = controls;

    // 5. Lighting (Bright Daylight Setup)
    // High intensity ambient light for clear map visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;
    
    // Directional light for definition
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    dirLight.position.set(20, 100, 20); 
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // 6. Groups
    const tilesGroup = new THREE.Group();
    tilesGroup.position.y = -0.1;
    scene.add(tilesGroup);
    tilesGroupRef.current = tilesGroup;

    const boundariesGroup = new THREE.Group();
    boundariesGroup.position.y = 0.2;
    scene.add(boundariesGroup);
    boundariesGroupRef.current = boundariesGroup;

    const tracksGroup = new THREE.Group();
    tracksGroup.position.y = 0.3;
    scene.add(tracksGroup);
    tracksGroupRef.current = tracksGroup;

    const tornadoGroup = new THREE.Group();
    scene.add(tornadoGroup);
    tornadoGroupRef.current = tornadoGroup;

    // 6b. Fallback ground plane (always visible as a base)
    const groundGeo = new THREE.PlaneGeometry(500, 500);
    const groundMat = new THREE.MeshBasicMaterial({ color: 0x2d5a27, side: THREE.DoubleSide });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.2;
    scene.add(ground);

    // 7. Sky Dome (Optional context, but kept separate from map lighting)
    const skyGeo = new THREE.SphereGeometry(600, 32, 32);
    const skyMat = new StormSkyMaterial();
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    scene.add(skyMesh);
    skyMaterialRef.current = skyMat;

    // Set explicit controls target so camera always looks at the ground
    controls.target.set(0, 0, 0);
    controls.update();


    // 8. Animation Loop
    const clock = new THREE.Clock();
    const brandPos = new THREE.Vector3(0, 0, 80);
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      
      if (controlsRef.current) controlsRef.current.update();

      // Update Sky
      if (skyMaterialRef.current) {
          skyMaterialRef.current.uniforms.uTime.value = elapsed;
          skyMaterialRef.current.uniforms.uFlash.value = 0.0; // Disable flash
      }

      // Update Tornado Shaders & Physics
      tornadoMaterialsRef.current.forEach(mat => {
          if (mat) {
              mat.uniforms.uTime.value = elapsed;
              mat.uniforms.uFlash.value = 0.0; // Disable flash
          }
      });
      debrisMaterialsRef.current.forEach(mat => {
          if(mat) {
              mat.uniforms.uTime.value = elapsed;
          }
      });
      
      // Update Camera Pos for Raymarching
      if (tornadoGroupRef.current && cameraRef.current) {
         tornadoGroupRef.current.children.forEach((container) => {
             const mesh = container.children.find(
                (child): child is THREE.Mesh => 
                child instanceof THREE.Mesh && child.material instanceof TornadoMaterial
             );
             if (mesh) {
                 const mat = mesh.material as TornadoMaterial;
                 tempVec.copy(cameraRef.current!.position);
                 mesh.worldToLocal(tempVec);
                 mat.uniforms.uLocalCameraPos.value.copy(tempVec);
             }
         });
      }

      // Render Scene
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);

        // Branding Label Update
        const camera = cameraRef.current;
        const width = rendererRef.current.domElement.width / window.devicePixelRatio;
        const height = rendererRef.current.domElement.height / window.devicePixelRatio;

        const zPos = Math.min(config.radius * 0.85, 80);
        brandPos.set(0, 0, zPos);
        brandPos.project(camera);

        if (brandingLabelRef.current) {
            if (brandPos.z > 1) {
                brandingLabelRef.current.style.display = 'none';
            } else {
                brandingLabelRef.current.style.display = 'block';
                const bx = (brandPos.x * .5 + .5) * width;
                const by = (-(brandPos.y * .5) + .5) * height;
                brandingLabelRef.current.style.transform = `translate(-50%, -50%) translate(${bx}px, ${by}px)`;
            }
        }
      }
    };
    animate();

    const handleResize = () => {
        if (cameraRef.current && rendererRef.current) {
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []); 

  // --- PLAYBACK AND POSITION UPDATE LOGIC ---
  useEffect(() => {
    if (!tornadoGroupRef.current) return;

    tornadoes.forEach((tornado, index) => {
        if (index >= tornadoGroupRef.current!.children.length) return;
        
        const tornadoObj = tornadoGroupRef.current!.children[index] as THREE.Group;
        const pathCurve = tornadoPathsRef.current.get(tornado.id);

        let targetPos = new THREE.Vector3();

        if (pathCurve && tornado.path && tornado.path.length > 1) {
            const t = Math.max(0, Math.min(1, playbackProgress));
            pathCurve.getPoint(t, targetPos);
        } else {
            targetPos = latLonToCartesian(tornado.lat, tornado.lon, 0, config.centerLat, config.centerLon);
        }

        tornadoObj.position.copy(targetPos);
    });

  }, [playbackProgress, tornadoes, config.centerLat, config.centerLon]);


  // --- DEBRIS GENERATION HELPER ---
  const createDebrisSystem = (
      count: number, 
      color: number, 
      size: number, 
      minRadius: number, 
      maxRadius: number,
      height: number
  ) => {
      const geometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(count * 3); 
      const randomArray = new Float32Array(count * 3); 
      const speedArray = new Float32Array(count);
      const offsetArray = new Float32Array(count);
      const sizeArray = new Float32Array(count);
      
      for(let i=0; i<count; i++) {
          randomArray[i*3] = Math.random();
          randomArray[i*3+1] = Math.random();
          randomArray[i*3+2] = Math.random();
          
          speedArray[i] = 0.5 + Math.random() * 1.5;
          offsetArray[i] = Math.random() * 100.0;
          sizeArray[i] = size * (0.6 + Math.random() * 0.8);
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      geometry.setAttribute('aRandom', new THREE.BufferAttribute(randomArray, 3));
      geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speedArray, 1));
      geometry.setAttribute('aOffset', new THREE.BufferAttribute(offsetArray, 1));
      geometry.setAttribute('aSize', new THREE.BufferAttribute(sizeArray, 1));
      
      const material = new DebrisMaterial({ color });
      material.uniforms.uBaseRadius.value = minRadius;
      material.uniforms.uTopRadius.value = maxRadius;
      material.uniforms.uHeight.value = height;
      
      const points = new THREE.Points(geometry, material);
      points.frustumCulled = false; 
      return { mesh: points, material: material };
  };

  // --- MAP AND TORNADO GEOMETRY SETUP ---
  useEffect(() => {
    if (!sceneRef.current || !tilesGroupRef.current) return;

    const { centerLat, centerLon, radius } = config;
    
    // Clear Map
    loadedTilesRef.current.forEach((tile) => {
        if (tile.mesh) tilesGroupRef.current?.remove(tile.mesh);
        if (tile.geometry) tile.geometry.dispose();
        if (tile.material) tile.material.dispose();
        if (tile.texture) tile.texture.dispose();
    });
    loadedTilesRef.current.clear();
    updateVisibleTiles(centerLat, centerLon, radius);
    clearBoundaries();
    loadWorldBoundaries();

  }, [config.centerLat, config.centerLon, config.radius, locationName]);

  // Update Tornado Geometry
  useEffect(() => {
    if (!tornadoGroupRef.current || !tracksGroupRef.current) return;

    while (tornadoGroupRef.current.children.length > 0) {
        const obj = tornadoGroupRef.current.children[0];
        tornadoGroupRef.current.remove(obj);
    }
    tornadoMaterialsRef.current = [];
    debrisMaterialsRef.current = []; 
    tornadoPathsRef.current.clear();

    while (tracksGroupRef.current.children.length > 0) {
        tracksGroupRef.current.remove(tracksGroupRef.current.children[0]);
    }

    tornadoes.forEach(tornado => {
        const container = new THREE.Group();
        
        // --- 1. Path Calculation ---
        let startPos = new THREE.Vector3();
        if (tornado.path && tornado.path.length > 1) {
             const points = tornado.path.map(p => 
                latLonToCartesian(p.lat, p.lon, 0, config.centerLat, config.centerLon)
            );
            const curve = new THREE.CatmullRomCurve3(points);
            tornadoPathsRef.current.set(tornado.id, curve);

            const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.15, 8, false);
            const tubeMat = new THREE.MeshBasicMaterial({
                color: 0xffb700,
                transparent: true,
                opacity: 0.8
            });
            const tube = new THREE.Mesh(tubeGeo, tubeMat);
            tube.position.y = 0.2;
            tracksGroupRef.current?.add(tube);
            
            curve.getPoint(playbackProgress, startPos);
        } else {
            startPos = latLonToCartesian(tornado.lat, tornado.lon, 0, config.centerLat, config.centerLon);
        }
        
        container.position.copy(startPos);

        // --- 2. Volumetric Raymarching Proxy Mesh ---
        // Increased radius to 20 to accommodate noise displacement
        // closed = false (which means NOT open ended, i.e., it has caps)
        const geometry = new THREE.CylinderGeometry(20, 20, 25, 16, 1, false);
        geometry.translate(0, 12.5, 0); 
        
        const material = new TornadoMaterial();
        tornadoMaterialsRef.current.push(material);
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.renderOrder = 10; 
        container.add(mesh);


        // --- 3. Realistic Debris Systems (GPU Physics) ---
        // Layer A: Fine Dust/Dirt at base (Tight spiral)
        const dustSystem = createDebrisSystem(8000, 0x3d342b, 0.4, 1.0, 14.0, 18.0);
        container.add(dustSystem.mesh);
        debrisMaterialsRef.current.push(dustSystem.material);
        
        // Layer B: Heavy Chunks (Darker, fly out further)
        const chunkSystem = createDebrisSystem(500, 0x110f0e, 0.8, 2.0, 20.0, 15.0);
        container.add(chunkSystem.mesh);
        debrisMaterialsRef.current.push(chunkSystem.material);
        
        // Layer C: Outer Cloud Condensation (Lighter, wider)
        const cloudSystem = createDebrisSystem(3000, 0x6b7280, 0.6, 4.0, 16.0, 22.0);
        container.add(cloudSystem.mesh);
        debrisMaterialsRef.current.push(cloudSystem.material);


        // --- 4. Shadow ---
        // Darker, larger shadow for storm presence
        const ringGeo = new THREE.RingGeometry(0.5, 12.0, 32);
        const ringMat = new THREE.MeshBasicMaterial({ 
            color: 0x000000, 
            transparent: true, 
            opacity: 0.6, 
            side: THREE.DoubleSide 
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.05;
        container.add(ring);
        
        tornadoGroupRef.current.add(container);
    });

  }, [tornadoes, config.centerLat, config.centerLon]); 


  // --- HELPER FUNCTIONS ---
  const updateVisibleTiles = (centerLat: number, centerLon: number, radiusKm: number) => {
    const centerTile = latLonToTile(centerLat, centerLon, ZOOM_LEVEL);
    const tilesNeededRadius = Math.min(Math.ceil(radiusKm / KM_PER_TILE) + 1, 4); 

    for (let dy = -tilesNeededRadius; dy <= tilesNeededRadius; dy++) {
        for (let dx = -tilesNeededRadius; dx <= tilesNeededRadius; dx++) {
            const x = centerTile.x + dx;
            const y = centerTile.y + dy;
            const key = getTileKey(x, y, ZOOM_LEVEL);
            loadTile(x, y, ZOOM_LEVEL, centerLat, centerLon);
        }
    }
  };

  const loadTile = (x: number, y: number, zoom: number, refLat: number, refLon: number) => {
    const key = getTileKey(x, y, zoom);
    if (loadedTilesRef.current.has(key)) return;

    loadedTilesRef.current.set(key, { loading: true });

    const topLeft = tileToLatLon(x, y, zoom);
    const bottomRight = tileToLatLon(x + 1, y + 1, zoom);

    const topLeftPos = latLonToCartesian(topLeft.lat, topLeft.lon, 0, refLat, refLon);
    const bottomRightPos = latLonToCartesian(bottomRight.lat, bottomRight.lon, 0, refLat, refLon);

    const width = Math.abs(bottomRightPos.x - topLeftPos.x);
    const height = Math.abs(bottomRightPos.z - topLeftPos.z);
    const centerX = (topLeftPos.x + bottomRightPos.x) / 2;
    const centerZ = (topLeftPos.z + bottomRightPos.z) / 2;

    const url = `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${y}/${x}`;
    
    const addTileMesh = (material: THREE.MeshBasicMaterial, texture?: THREE.Texture) => {
        if (!tilesGroupRef.current) return;
        const geometry = new THREE.PlaneGeometry(width, height);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.set(centerX, -1, centerZ);
        tilesGroupRef.current.add(mesh);
        loadedTilesRef.current.set(key, { mesh, geometry, material, texture });
    };

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';
    loader.load(
        url,
        (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace; 
            texture.anisotropy = rendererRef.current?.capabilities.getMaxAnisotropy() || 1;
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                color: 0xffffff 
            });
            addTileMesh(material, texture);
        },
        undefined,
        (err) => {
            // Fallback: show a colored tile so map grid is still visible
            console.warn(`Tile load failed: ${url}`, err);
            const fallbackMat = new THREE.MeshBasicMaterial({
                color: 0x3a6b35,
                side: THREE.DoubleSide
            });
            addTileMesh(fallbackMat);
        }
    );
  };

  const loadWorldBoundaries = async () => {
    if (boundariesLoadedRef.current) return;
    
    // Safety check for topojson
    if (typeof topojson === 'undefined') {
        console.warn("TopoJSON library not loaded. World boundaries will be skipped.");
        return;
    }

     try {
          const url = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
          const res = await fetch(url);
          const topology = await res.json();
          
          const countries = topojson.feature(topology, topology.objects.countries);
          // Darker lines for visibility on bright map
          const material = new THREE.LineBasicMaterial({ 
              color: 0x000000, transparent: true, opacity: 0.4, linewidth: 1 
          });
          const positions: number[] = [];
          countries.features.forEach((feature: any) => {
             const geometry = feature.geometry;
             if (!geometry) return;
             const addRing = (ring: number[][]) => {
                 for (let i = 0; i < ring.length - 1; i++) {
                     const p1 = latLonToCartesian(ring[i][1], ring[i][0], 20, config.centerLat, config.centerLon);
                     const p2 = latLonToCartesian(ring[i+1][1], ring[i+1][0], 20, config.centerLat, config.centerLon);
                     positions.push(p1.x, p1.y, p1.z);
                     positions.push(p2.x, p2.y, p2.z);
                 }
             };
             if (geometry.type === 'Polygon') addRing(geometry.coordinates[0]);
             else if (geometry.type === 'MultiPolygon') geometry.coordinates.forEach((poly: any) => addRing(poly[0]));
          });
          const geom = new THREE.BufferGeometry();
          geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
          const lines = new THREE.LineSegments(geom, material);
          if (boundariesGroupRef.current) boundariesGroupRef.current.add(lines);
          boundariesLoadedRef.current = true;
      } catch (e) { 
        console.error("Failed to load world boundaries:", e);
      }
  };

  const clearBoundaries = () => {
      if (boundariesGroupRef.current) boundariesGroupRef.current.clear();
      boundariesLoadedRef.current = false;
  };

  return (
    <div className="relative w-full h-full">
        <div ref={containerRef} className="w-full h-full absolute inset-0 z-0" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div 
                ref={brandingLabelRef}
                className="absolute text-center whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2"
                style={{ willChange: 'transform', display: 'none' }}
            >
                <div className="text-xs font-mono text-white/60 tracking-widest uppercase drop-shadow-md">
                    Developed by Shahnab
                </div>
            </div>
        </div>
    </div>
  );
};

export default MapScene;
