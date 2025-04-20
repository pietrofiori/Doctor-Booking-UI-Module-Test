import styled, { css, DefaultTheme } from "styled-components";

export const modifiers = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.alerts.error};
  `,
  focus: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.green.primary};
    box-shadow: 0 0 0 3px ${theme.colors.green.primary}33;
  `,
  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray.light};
    color: ${theme.colors.gray.medium};
    cursor: not-allowed;
  `,
  iconPadding: () => css`
    padding: 5px 15px;
  `
};

export const sizeModifier = {
  small: css`
    height: 40px;
  `,
  large: css`
    height: 60px;
  `
} as const;

export const inputPaddingModifier = {
  left: css`
    padding-left: 50px;
  `,
  right: css`
    padding-right: 25px;
  `
} as const;

export const iconModifier = {
  left: css`
    left: 16px;
  `,
  right: css`
    right: 16px;
  `
} as const;

export const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    color: ${(props) => props.theme.colors.white.primary};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacings.xs};
    margin-left: 4px;
    margin-bottom: ${theme.spacings.xs};

    span {
      color: ${theme.colors.alerts.error};
    }

    b {
      color: ${theme.colors.white.primary};
    }
  `}
`;
export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xs};
    color: ${theme.colors.alerts.error};
    font-family: ${theme.fontFamilies.primary};

    margin-left: 3px;
  `}
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div<{ $iconPosition?: "left" | "right" }>`
  ${({ theme, $iconPosition = "left" }) => css`
    position: absolute;
    top: calc(50% - 10px);
    ${iconModifier[$iconPosition]}
    display: flex;
    align-items: center;
    pointer-events: auto;
    cursor: pointer;
    z-index: 1;
    svg {
      fill: ${theme.colors.gray.medium};
    }
  `}
`;

export const Input = styled.input<{
  $error?: boolean;
  $icon?: boolean;
  $size?: "small" | "large";
  $iconPosition?: "left" | "right";
}>`
  ${({ theme, $error, $size = "small", $icon, $iconPosition = "left" }) => css`
    padding: 16px 11px;
    ${sizeModifier[$size]};
    ${$icon && inputPaddingModifier[$iconPosition]}
    font-family: ${theme.fontFamilies.secondary};
    font-size: ${theme.fontSizes.label.labelLarge};
    font-weight: ${theme.fontWeight.regular};
    background-color: ${theme.colors.white.primary};
    border: 1px solid ${theme.colors.gray.border};
    border-radius: ${theme.borderRadius.xs};
    outline: none;
    transition: border-color 0.2s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${$error && modifiers.error(theme)};
    &:hover {
      ${!$error && modifiers.focus(theme)};
    }
    &:focus {
      ${!$error && modifiers.focus(theme)};
    }
    &:disabled {
      ${modifiers.disabled(theme)};
    }
    ${$icon && modifiers.iconPadding()};
  `}
`;
