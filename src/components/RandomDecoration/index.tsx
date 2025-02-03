import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, RepeatWrapping, TextureLoader, Uniform } from "three";
import PerlinTexture from "../../assets/perlin-texture.png";

const RandomDecoration = () => {
  const meshRef = useRef<Mesh>(null!);

  const perlinTexture = useLoader(TextureLoader, PerlinTexture);
  perlinTexture.wrapS = RepeatWrapping;
  perlinTexture.wrapT = RepeatWrapping;

  const resolution = {
    x: window.innerWidth,
    y: window.innerHeight,
  };

  const mousePosition = { x: 0, y: 0 };
  window.addEventListener("mousemove", (ev) => {
    mousePosition.x = ev.clientX / window.innerWidth;
    mousePosition.y = ev.clientY / window.innerHeight;
  });

  const vertexShader = `
  uniform float uTime;
  uniform sampler2D uPerlinTexture;

  uniform vec2 uMouse;

  varying vec2 vUv;
    void main(){
        float perlinTexture = texture(uPerlinTexture,vec2(0.5,vUv.y)).r;
        vec3 newPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0);

        vUv = uv;
    }
    `;
  const fragmentShader = `
  uniform float uTime;

  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform sampler2D uPerlinTexture;

  varying vec2 vUv;
    void main(){
      vec2 perlinUv = vUv;
      // perlinUv.x *= 0.2;
      // perlinUv.y *= 0.4;
    perlinUv.x += uTime * 0.02;

    float perlinTexture = texture(uPerlinTexture,perlinUv).r;
    perlinTexture *= smoothstep(1.0,0.5,vUv.x);
    perlinTexture *= smoothstep(0.0,0.5,vUv.x);
    perlinTexture *= smoothstep(1.0,0.8,vUv.y);
    perlinTexture *= smoothstep(0.0,0.3,vUv.y);
    vec4 color = vec4(vec3(1.0),step(0.4,perlinTexture));
    
    gl_FragColor = color;
     #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }
    `;

  useFrame((state) => {
    meshRef.current.material.uniforms.uTime.value =
      state.clock.getElapsedTime();
  });

  return (
    <>
      <mesh ref={meshRef}>
        <planeGeometry args={[14, 8, 24, 24]} />
        <shaderMaterial
          // wireframe={true}
          transparent={true}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: new Uniform(0),

            uMouse: new Uniform(mousePosition),
            uPerlinTexture: new Uniform(perlinTexture),
            uResolution: new Uniform(resolution),
          }}
        />
      </mesh>
    </>
  );
};

export default RandomDecoration;
