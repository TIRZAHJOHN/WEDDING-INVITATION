import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Candle({ x }) {
  const flame = useRef();

  useFrame((state) => {
    if (!flame.current) return;
    const flicker = 1 + Math.sin(state.clock.elapsedTime * 8 + x) * 0.12;
    flame.current.scale.setScalar(flicker);
  });

  return (
    <group position={[x, -1.8, 0.5]}>
      <mesh>
        <cylinderGeometry args={[0.06, 0.075, 0.8, 18]} />
        <meshStandardMaterial color="#fff2db" roughness={0.45} metalness={0.05} />
      </mesh>
      <mesh ref={flame} position={[0, 0.52, 0]}>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshBasicMaterial color="#ffd071" transparent opacity={0.9} />
      </mesh>
      <pointLight color="#ffc56d" intensity={0.8} distance={2.2} position={[0, 0.6, 0.1]} />
    </group>
  );
}

function ChurchModel() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.24) * 0.08;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.04;
  });

  return (
    <group ref={group} position={[0, -0.25, 0]} rotation={[0.04, 0, 0]}>
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[2.8, 1.35, 1.1]} />
        <meshStandardMaterial color="#fff5de" emissive="#7e4b35" emissiveIntensity={0.08} roughness={0.38} />
      </mesh>
      <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[2.08, 2.08, 1.18]} />
        <meshStandardMaterial color="#f5c16c" emissive="#a96836" emissiveIntensity={0.12} roughness={0.34} />
      </mesh>
      <mesh position={[0, 0.07, 0.63]}>
        <boxGeometry args={[0.52, 0.92, 0.08]} />
        <meshStandardMaterial color="#3b2230" emissive="#d8a441" emissiveIntensity={0.28} />
      </mesh>
      <mesh position={[0, 1.55, 0]}>
        <boxGeometry args={[0.48, 1.25, 0.58]} />
        <meshStandardMaterial color="#fff2d2" emissive="#7e4b35" emissiveIntensity={0.08} />
      </mesh>
      <mesh position={[0, 2.25, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.46, 0.9, 4]} />
        <meshStandardMaterial color="#d8a441" emissive="#d8a441" emissiveIntensity={0.18} />
      </mesh>
      <mesh position={[0, 2.95, 0]}>
        <boxGeometry args={[0.08, 0.55, 0.08]} />
        <meshBasicMaterial color="#fff5d6" />
      </mesh>
      <mesh position={[0, 3.16, 0]}>
        <boxGeometry args={[0.34, 0.08, 0.08]} />
        <meshBasicMaterial color="#fff5d6" />
      </mesh>
      <Candle x={-1.9} />
      <Candle x={1.9} />
      <Candle x={-2.35} />
      <Candle x={2.35} />
    </group>
  );
}

export default function ChurchGlowScene() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-80 lg:h-[660px]" aria-hidden="true">
      <Canvas camera={{ position: [0, 1.1, 6.2], fov: 46 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 4, 3]} intensity={1.1} color="#fff1d1" />
        <pointLight position={[0, 2.6, 2.2]} intensity={3} color="#ffd58b" distance={7} />
        <ChurchModel />
      </Canvas>
    </div>
  );
}
