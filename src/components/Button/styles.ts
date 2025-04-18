import styled, { css, DefaultTheme } from "styled-components";

const BUTTON_SIZES = {
  small: {
    minWidth: "114px",
    height: "24px",
    fontSize: "labelLarge"
  },
  medium: {
    minWidth: "150px",
    height: "36px",
    fontSize: "labelLarge"
  },
  large: {
    minWidth: "220px",
    height: "48px",
    fontSize: "bodyNormal"
  },
  full: {
    minWidth: "100%",
    height: "36px",
    fontSize: "labelLarge"
  }
} as const;

const VARIANT_STYLES = {
  solid: (theme: DefaultTheme, color: string) => css`
    background-color: ${color};
    color: ${theme.colors.white.primary};
    border: none;
  `,
  tonal: (_theme: DefaultTheme, color: string) => css`
    background-color: ${color}20;
    color: ${color};
    border: none;

    &:enabled:hover {
      background: ${color}40;
    }
  `,
  outlined: (_theme: DefaultTheme, color: string) => css`
    background-color: transparent;
    color: ${color};
    border: 1px solid ${color};

    &:enabled:hover {
      background: ${color}40;
      color: ${color};
    }
  `,
  text: (_theme: DefaultTheme, color: string) => css`
    background-color: transparent;
    color: ${color};
    border: none;
    padding: 0px;
    box-shadow: none;
  `
};

export const Button = styled.button<{
  size?: "small" | "medium" | "large" | "full";
  $variant?: "solid" | "tonal" | "outlined" | "text";
  color?: string;
  width?: string;
  height?: string;
}>`
  ${({
    theme,
    size = "medium",
    $variant = "solid",
    color = theme.colors.green.primary,
    width,
    height
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: ${theme.borderRadius.xs};
    padding: 16px;

    transition: all 0.2s ease-out;
    box-shadow: 0 15px 20px rgba(42, 196, 149, 0.17);
    width: ${width ? width : BUTTON_SIZES[size].minWidth};
    height: ${height ? height : BUTTON_SIZES[size].height};
    font-size: ${BUTTON_SIZES[size].fontSize};

    ${VARIANT_STYLES[$variant](theme, color)}

    font-family: ${theme.fontFamilies.secondary};
    font-weight: ${theme.fontWeight.bold};

    &:enabled:hover {
      transform: scale(1.02);
    }

    &:disabled {
      background-color: ${theme.colors.green.disabled};
      cursor: not-allowed;
      border-color: ${theme.colors.green.disabled};
      box-shadow: none;
    }
  `}
`;
