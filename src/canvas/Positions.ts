export const CAMERA_POSITIONS = {
  default: {
    position: [0, 3, 8] as [number, number, number],
    lookAt: [0, 1, 0] as [number, number, number],
  },
  book: {
    position: [0, 2.5, 3] as [number, number, number],
    lookAt: [0, 0.25, 0] as [number, number, number],
  },
  cauldron: {
    position: [-3, 2, 3] as [number, number, number],
    lookAt: [-5, 0.5, 0] as [number, number, number],
  },
  stars: {
    position: [3, 3, 3] as [number, number, number],
    lookAt: [5, 0.5, 0] as [number, number, number],
  },
};

export const OBJECT_POSITIONS = {
  cauldron: [-5, 0.5, 0] as [number, number, number],
  book: [0, 0.25, 0] as [number, number, number],
  stars: [5, 0.5, 0] as [number, number, number],
  frog: [-2, 0, 0] as [number, number, number],
};
