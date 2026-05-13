import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Color } from 'three';

function ParticleField({ count = 850, color = '#f6d98f', spread = 16, speed = 0.01, size = 0.035 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = spread * (0.28 + Math.random() * 0.72);
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * spread * 1.25;
      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = height;
      values[i * 3 + 2] = Math.sin(angle) * radius - 6;
    }

    return values;
  }, [count, spread]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={new Color(color)}
        depthWrite={false}
        opacity={0.72}
        size={size}
        sizeAttenuation
        transparent
      />
    </points>
  );
}

function AuroraVeil({ count = 180 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * 17;
      values[i * 3 + 1] = 1.4 + Math.sin(i * 0.37) * 1.6 + Math.random() * 1.8;
      values[i * 3 + 2] = -9 + Math.random() * 4;
    }

    return values;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.06) * 0.035;
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.22;
    ref.current.rotation.y += delta * 0.006;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#fff1c8" depthWrite={false} opacity={0.22} size={0.18} transparent />
    </points>
  );
}

function GlowPlane() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.material.opacity = 0.045 + Math.sin(state.clock.elapsedTime * 0.55) * 0.012;
  });

  return (
    <mesh ref={ref} position={[0, 0.35, -8]}>
      <planeGeometry args={[18, 10]} />
      <meshBasicMaterial color="#fff0bd" depthWrite={false} transparent opacity={0.05} />
    </mesh>
  );
}

export default function AmbientScene() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#5b3140_0%,#251323_42%,#100b14_100%)]">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 58 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.55} />
        <GlowPlane />
        <ParticleField count={950} color="#f7dea0" spread={18} speed={0.012} size={0.028} />
        <ParticleField count={300} color="#ffd9df" spread={12} speed={-0.018} size={0.045} />
        <AuroraVeil />
      </Canvas>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,9,20,.35),rgba(255,246,231,.18)_45%,rgba(255,246,231,.9)_100%)]" />
      <div className="grain" aria-hidden="true" />
    </div>
  );
}
