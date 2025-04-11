export const dropShadow = (radius: number) => {
  return `text-(--accent) drop-shadow-[0_2px_${radius}px_rgb(0,0,0)] dark:drop-shadow-[0_0_${radius}px_var(--accent)]`;
};
