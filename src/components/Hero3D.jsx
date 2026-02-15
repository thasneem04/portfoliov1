import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Preload } from "@react-three/drei";

const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          {/* Lighting */}
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} intensity={2} color="#9333ea" />
          <pointLight position={[-3, -3, 2]} intensity={5} color="#3b82f6" />
          <pointLight position={[3, 3, -2]} intensity={5} color="#ec4899" />

          {/* Floating Object */}
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#2e1065" 
                attach="material"
                distort={0.5} 
                speed={2} 
                roughness={0.2}
                metalness={0.6}
              />
            </Sphere>
          </Float>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
