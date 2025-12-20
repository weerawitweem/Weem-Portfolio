import WizardRoom from "@/canvas/WizardRoom";
import CameraController from "@/canvas/CameraController";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <CameraController />
      <WizardRoom />
    </>
  );
}
