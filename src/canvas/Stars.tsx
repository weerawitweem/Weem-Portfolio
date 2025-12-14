import type { ThreeElements } from '@react-three/fiber'

type Props = ThreeElements['mesh']

export default function Stars(props: Props) {
  return (
    <mesh
      {...props}
      castShadow
      onPointerDown={() => console.log("Stars clicked")}
    >
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  );
}
