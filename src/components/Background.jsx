import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Background = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
      </Canvas>
    </div>
  );
};

export default Background;
