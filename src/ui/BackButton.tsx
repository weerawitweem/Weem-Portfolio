import { useSceneStore } from "@/store/useSceneStore";

export default function BackButton() {
  const setFocus = useSceneStore((s) => s.setFocus);

  return (
    <button
      onClick={() => setFocus(null)}
      className="fixed top-4 left-4 z-10 px-4 py-2 bg-black/60 text-white rounded"
    >
      Back
    </button>
  );
}
