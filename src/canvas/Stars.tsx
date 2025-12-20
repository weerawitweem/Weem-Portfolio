import type { ThreeElements } from '@react-three/fiber'
import { useSceneStore } from "@/store/useSceneStore";

type Props = ThreeElements['mesh']

export default function Stars(props: Props) {

  const setFocus = useSceneStore((s) => s.setFocus);

  return (
    <mesh
      {...props}
      castShadow
      onPointerDown={() => setFocus("stars")}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  );
}
