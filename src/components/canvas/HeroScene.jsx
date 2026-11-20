import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Preload } from "@react-three/drei";
import * as THREE from "three";

/* Liquid-metal core that leans toward the cursor */
const Core = ({ isMobile }) => {
  const group = useRef();
  const wire = useRef();
  const halo = useRef();

  useFrame((state, delta) => {
    const { pointer, clock } = state;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.6, 3, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.4, 3, delta);
    }
    if (wire.current) {
      wire.current.rotation.y += delta * 0.15;
      wire.current.rotation.z += delta * 0.05;
    }
    if (halo.current) {
      halo.current.rotation.z = clock.elapsedTime * 0.25;
    }
  });

  const scale = isMobile ? 0.72 : 0.92;

  return (
    <group ref={group} scale={scale}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.45, 24]} />
          <MeshDistortMaterial
            color="#7c3aed"
            emissive="#4c1d95"
            emissiveIntensity={0.9}
            roughness={0.12}
            metalness={0.9}
            distort={0.42}
            speed={2.2}
          />
        </mesh>
      </Float>

      <mesh ref={wire}>
        <icosahedronGeometry args={[2.25, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.18} />
      </mesh>

      <group ref={halo} rotation={[1.15, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[2.9, 0.012, 16, 200]} />
          <meshBasicMaterial color="#f5c451" transparent opacity={0.85} />
        </mesh>
        <mesh position={[2.9, 0, 0]}>
          <sphereGeometry args={[0.09, 24, 24]} />
          <meshBasicMaterial color="#fde68a" />
        </mesh>
      </group>
      <mesh rotation={[1.6, -0.5, 0.4]}>
        <torusGeometry args={[3.4, 0.006, 16, 200]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.45} />
      </mesh>
    </group>
  );
};

/* Small satellites orbiting the core */
const Satellites = () => {
  const ref = useRef();
  const items = useMemo(
    () => [
      { geo: "oct", pos: [3.1, 1.2, -0.6], color: "#22d3ee", s: 0.28 },
      { geo: "box", pos: [-3.1, -1.2, 0.4], color: "#f5c451", s: 0.24 },
      { geo: "knot", pos: [1.4, 2.5, -1.6], color: "#a78bfa", s: 0.2 },
      { geo: "tet", pos: [2.6, -1.9, 0.8], color: "#f472b6", s: 0.26 },
    ],
    []
  );
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.12;
  });
  return (
    <group ref={ref}>
      {items.map((it, i) => (
        <Float key={i} speed={2 + i * 0.4} rotationIntensity={2} floatIntensity={1.5}>
          <mesh position={it.pos} scale={it.s}>
            {it.geo === "oct" && <octahedronGeometry args={[1, 0]} />}
            {it.geo === "box" && <boxGeometry args={[1.3, 1.3, 1.3]} />}
            {it.geo === "knot" && <torusKnotGeometry args={[1, 0.32, 96, 12]} />}
            {it.geo === "tet" && <tetrahedronGeometry args={[1.2, 0]} />}
            <meshStandardMaterial color={it.color} metalness={0.7} roughness={0.2} emissive={it.color} emissiveIntensity={0.25} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const HeroScene = ({ isMobile = false }) => (
  <Canvas
    dpr={[1, isMobile ? 1.5 : 2]}
    camera={{ position: [0, 0, 8.5], fov: 45 }}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
  >
    <ambientLight intensity={0.35} />
    <pointLight position={[5, 4, 5]} intensity={60} color="#22d3ee" />
    <pointLight position={[-5, -3, 3]} intensity={50} color="#f472b6" />
    <pointLight position={[0, 5, -4]} intensity={40} color="#f5c451" />
    <directionalLight position={[0, 2, 6]} intensity={1.2} />
    <Suspense fallback={null}>
      <Core isMobile={isMobile} />
      <Satellites />
      <Sparkles count={isMobile ? 40 : 90} scale={[11, 7, 5]} size={2.4} speed={0.35} color="#c4b5fd" />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default HeroScene;
