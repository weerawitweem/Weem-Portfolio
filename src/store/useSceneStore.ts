import { create } from "zustand";

type FocusTarget = "book" | "cauldron" | "stars" | null;

type SceneState = {
  focus: FocusTarget;
  setFocus: (target: FocusTarget) => void;
};

export const useSceneStore = create<SceneState>((set) => ({
  focus: null,
  setFocus: (focus) => set({ focus }),
}));
