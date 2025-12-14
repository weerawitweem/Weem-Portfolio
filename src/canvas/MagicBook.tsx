import type { ThreeElements } from '@react-three/fiber'

type Props = ThreeElements['mesh']

export default function MagicBook(props: Props) {
  return (
    <mesh
      {...props}
      castShadow
      onPointerDown={() => console.log("Magic Book clicked")}
    >
      <boxGeometry args={[1.5, 0.3, 1]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}
