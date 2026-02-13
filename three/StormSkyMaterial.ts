
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;

const fragmentShader = `
uniform float uTime;
uniform float uFlash; 
uniform vec3 uBaseColor;
uniform vec3 uCloudColor;

varying vec2 vUv;
varying vec3 vWorldPosition;

// --- NOISE ---
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

float fbm(vec3 p) {
    float f = 0.0;
    float amp = 0.5;
    float freq = 0.8;
    for(int i=0; i<5; i++) {
        f += amp * snoise(p * freq);
        freq *= 2.0;
        amp *= 0.5;
    }
    return f;
}

void main() {
    // Project to dome
    vec3 p = normalize(vWorldPosition) * 4.0;
    
    // Rolling cloud movement
    p.x += uTime * 0.03;
    p.z += uTime * 0.01;
    
    // Large structure noise
    float baseNoise = fbm(p);
    
    // Detail noise
    float detailNoise = snoise(p * 3.0 + uTime * 0.1);
    
    // Cloud density map
    float clouds = smoothstep(-0.2, 0.8, baseNoise + detailNoise * 0.2);
    
    // Colors (Dark Storm)
    vec3 skyDark = vec3(0.05, 0.07, 0.1); // Deep slate
    vec3 cloudDark = vec3(0.15, 0.16, 0.18); // Dark grey clouds
    vec3 cloudLight = vec3(0.3, 0.32, 0.35); // Lighter edges
    
    vec3 finalColor = mix(skyDark, cloudDark, clouds);
    
    // Add depth to clouds
    finalColor = mix(finalColor, cloudLight, clouds * (0.5 + 0.5 * detailNoise));
    
    // Lightning
    // Flash whole sky slightly, but clouds more
    vec3 flashCol = vec3(0.8, 0.9, 1.0);
    float flashMask = smoothstep(0.3, 0.8, snoise(p * 2.0)); // Localized flash hot spots
    
    // If uFlash is active, brighten sky
    finalColor += flashCol * uFlash * (0.1 + 0.9 * flashMask * clouds);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

export class StormSkyMaterial extends THREE.ShaderMaterial {
    uniforms: {
        uTime: { value: number };
        uFlash: { value: number };
        uBaseColor: { value: THREE.Color };
        uCloudColor: { value: THREE.Color };
    };

    constructor() {
        const uniforms = {
            uTime: { value: 0 },
            uFlash: { value: 0 },
            uBaseColor: { value: new THREE.Color(0x1a202c) },
            uCloudColor: { value: new THREE.Color(0x4a5568) },
        };

        super({
            uniforms,
            vertexShader,
            fragmentShader,
            side: THREE.BackSide
        });
        this.uniforms = uniforms;
    }
}
