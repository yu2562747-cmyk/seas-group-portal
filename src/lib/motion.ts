export const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const hoverLift = {
  initial: { y: 0 },
  whileHover: { y: -2 },
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
};
