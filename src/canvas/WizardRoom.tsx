import MagicBook from "./MagicBook";
import Cauldron from "./Cauldron";
import Stars from "./Stars";
import Frog from "./Frog";

export default function WizardRoom() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      <Cauldron position={[-5, 0.5, 0]} />
      <MagicBook position={[0, 0.25, 0]} />
      <Stars position={[5, 0.5, 0]} />
      <Frog position={[-2, 0, 0]} />
    </>
  );
}
