import { Theme } from ".";

/**
 * 
 * Example using mediaQuery:
 * 
 ${mediaQuery(
    "xl",
    "min"
  )(`
    border-top: 0;
    padding: 2rem;
  `)}
 */
export const mediaQuery = (
  key: keyof typeof Theme.breakpoints | number,
  range: "min" | "max" = "max"
) => {
  return (style: TemplateStringsArray | string) =>
    `@media (${range}-width: ${
      typeof key === "string" ? Theme.breakpoints[key] : key + "px"
    }) { ${style} }`;
};