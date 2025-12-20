import { Canvas } from "@react-three/fiber";
import Scene from "./canvas/Scene";
import BackButton from "@/ui/BackButton";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <BackButton />
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }} shadows>
        <Scene />
      </Canvas>
    </div>
  );
}
