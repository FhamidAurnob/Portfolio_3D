import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const randomSphere = (count, radius) => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random(), v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(Math.random());
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
};

const StarField = () => {
  const ref = useRef();
  const sphere = useMemo(() => randomSphere(4000, 1.2), []);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 14;
    ref.current.rotation.y -= delta / 20;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color="#c4b5fd" size={0.0022} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <StarField />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
