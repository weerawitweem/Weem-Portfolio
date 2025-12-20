import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { useSceneStore } from "@/store/useSceneStore";
import { CAMERA_POSITIONS } from "@/canvas/Positions";

export default function CameraController() {
  const { camera } = useThree();
  const focus = useSceneStore((s) => s.focus);

  const targetPosition = useRef(new Vector3());
  const targetLookAt = useRef(new Vector3());

  useFrame(() => {
    const config =
      focus === null
        ? CAMERA_POSITIONS.default
        : CAMERA_POSITIONS[focus];

    targetPosition.current.set(...config.position);
    targetLookAt.current.set(...config.lookAt);

    camera.position.lerp(targetPosition.current, 0.08);
    camera.lookAt(targetLookAt.current);
  });

  return null;
}
