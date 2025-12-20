import type { ThreeElements } from '@react-three/fiber'
import { useSceneStore } from "@/store/useSceneStore";

type Props = ThreeElements['mesh']

export default function Cauldron(props: Props) {

  const setFocus = useSceneStore((s) => s.setFocus);

  return (
    <mesh
      {...props}
      castShadow
      onPointerDown={() => setFocus("cauldron")}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <cylinderGeometry args={[0.7, 0.9, 1, 16]} />
      <meshStandardMaterial color="#444" />
    </mesh>
  );
}
