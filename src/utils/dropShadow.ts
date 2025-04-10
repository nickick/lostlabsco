export const dropShadow = (radius: number) => {
  return `dark:text-(--accent) dark:drop-shadow-[0_0_${radius}px_var(--accent)] light:drop-shadow-[0_0_${radius}px_var(--accent)] light:text-(--foreground)`;
};
