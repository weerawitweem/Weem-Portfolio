import MagicBook from "./MagicBook";
import Cauldron from "./Cauldron";
import Stars from "./Stars";
import Frog from "./Frog";
import { OBJECT_POSITIONS } from "./Positions";

export default function WizardRoom() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      <Cauldron position={OBJECT_POSITIONS.cauldron} />
      <MagicBook position={OBJECT_POSITIONS.book} />
      <Stars position={OBJECT_POSITIONS.stars} />
      <Frog position={OBJECT_POSITIONS.frog} />
    </>
  );
}
