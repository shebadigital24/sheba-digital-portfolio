import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

function AbstractCore() {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.25;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.6}>
      <Sphere ref={mesh} args={[1, 128, 128]} scale={2.2}>
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.35}
          speed={1.8}
          roughness={0.15}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#06b6d4" />
        <pointLight position={[-10, -10, -5]} intensity={0.6} color="#8b5cf6" />
        <AbstractCore />
      </Canvas>
    </div>
  );
}
