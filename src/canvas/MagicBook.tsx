import type { ThreeElements } from '@react-three/fiber'
import { useSceneStore } from "@/store/useSceneStore";

type Props = ThreeElements['mesh']

export default function MagicBook(props: Props) {

  const setFocus = useSceneStore((s) => s.setFocus);

  return (
    <mesh
      {...props}
      castShadow
      onPointerDown={() => setFocus("book")}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <boxGeometry args={[1.5, 0.3, 1]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}
