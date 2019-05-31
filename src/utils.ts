export function verticalLinearGradient(parts: string[][]): string {
  return `linear-gradient(180deg, ${parts
    .map(part => `${part[0]} ${part[1]}`)
    .join(", ")})`;
}
