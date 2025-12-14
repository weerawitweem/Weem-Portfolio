import type { ThreeElements } from '@react-three/fiber'

type Props = ThreeElements['mesh']

export default function Cauldron(props: Props) {
  return (
    <mesh
      {...props}
      castShadow
      onPointerDown={() => console.log("Cauldron clicked")}
    >
      <cylinderGeometry args={[0.7, 0.9, 1, 16]} />
      <meshStandardMaterial color="#444" />
    </mesh>
  );
}
