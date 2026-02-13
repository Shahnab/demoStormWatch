
import * as THREE from 'three';

const vertexShader = `
uniform float uTime;
uniform float uHeight; 
uniform float uBaseRadius;
uniform float uTopRadius;

attribute float aSize;
attribute float aSpeed;
attribute float aOffset; 
attribute vec3 aRandom; 

varying float vAlpha;
varying float vSpeed;

void main() {
    // Life cycle 0.0 -> 1.0
    float t = fract(uTime * aSpeed * 0.1 + aOffset);
    
    // Vertical motion (Updraft)
    // Accelerate as it goes up
    float hPct = pow(t, 0.8); 
    float y = hPct * uHeight;
    
    // Radius Calculation
    // Base funnel shape
    float r = mix(uBaseRadius, uTopRadius, pow(hPct, 2.0));
    
    // Centrifugal Force drift (particles fly out as they rise)
    float drift = aRandom.x * 5.0 * hPct;
    r += drift;
    
    // Angular Momentum Physics
    // Speed is inversely proportional to radius (v = k/r)
    // But we clamp it so it doesn't explode at r=0
    float spinSpeed = 15.0 / (r + 0.5);
    
    // Total rotation angle
    float theta = -uTime * spinSpeed + aRandom.y * 6.28;
    
    // Position
    float x = cos(theta) * r;
    float z = sin(theta) * r;
    
    // Add Turbulence/Chaos (Jitter)
    vec3 chaos = vec3(
        sin(uTime * 10.0 + aRandom.z * 10.0),
        cos(uTime * 8.0 + aRandom.x * 10.0),
        sin(uTime * 12.0 + aRandom.y * 10.0)
    ) * (0.2 + hPct * 1.0); // More chaos at top
    
    vec3 newPos = vec3(x + chaos.x, y + chaos.y, z + chaos.z);
    
    // Fade in/out
    // Fade in quickly at bottom, fade out slowly at top
    vAlpha = smoothstep(0.0, 0.1, t) * (1.0 - smoothstep(0.85, 1.0, t));
    
    // Pass speed to frag for motion blur effect simulation
    vSpeed = spinSpeed;
    
    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation
    gl_PointSize = aSize * (400.0 / -mvPosition.z);
}
`;

const fragmentShader = `
uniform vec3 uColor;
varying float vAlpha;
varying float vSpeed;

void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    
    if (dist > 0.5) discard;
    
    // Soft particle ball
    float alpha = smoothstep(0.5, 0.0, dist);
    
    // Darker center for debris chunks
    vec3 col = uColor * (0.5 + 0.5 * smoothstep(0.0, 1.0, dist));
    
    gl_FragColor = vec4(col, alpha * vAlpha);
}
`;

export class DebrisMaterial extends THREE.ShaderMaterial {
    uniforms: {
        uTime: { value: number };
        uHeight: { value: number };
        uBaseRadius: { value: number };
        uTopRadius: { value: number };
        uColor: { value: THREE.Color };
    };

    constructor(params: { color: number }) {
        const uniforms = {
            uTime: { value: 0 },
            uHeight: { value: 25 },
            uBaseRadius: { value: 1.0 },
            uTopRadius: { value: 12.0 },
            uColor: { value: new THREE.Color(params.color) },
        };

        super({
            uniforms,
            vertexShader,
            fragmentShader,
            transparent: true,
            depthWrite: false,
            blending: THREE.NormalBlending
        });
        
        this.uniforms = uniforms;
    }
}
