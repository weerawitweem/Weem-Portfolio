import type { ThreeElements } from '@react-three/fiber'

type Props = ThreeElements['mesh']

export default function Frog(props: Props) {
  return (
    <mesh
      {...props}
      castShadow
      onPointerDown={() => console.log("Frog clicked")}
    >
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial color="#22c55e" />
    </mesh>
  );
}
