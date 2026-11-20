import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <span className="canvas-loader" />
      <p style={{ fontSize: 13, color: "#c4b5fd", fontWeight: 600, marginTop: 18, fontFamily: "JetBrains Mono, monospace" }}>
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
