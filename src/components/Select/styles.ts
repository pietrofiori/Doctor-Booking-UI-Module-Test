import styled, { css, DefaultTheme } from "styled-components";

const modifiers = {
  select: {
    error: (theme: DefaultTheme) => css`
      border: 1px solid ${theme.colors.alerts.error};
    `,
    noError: (theme: DefaultTheme) => css`
      border: 1px solid ${theme.colors.gray.border};
    `,
    hover: (theme: DefaultTheme) => css`
      &:hover {
        border-color: ${theme.colors.green.primary};
      }
    `,
    focus: (theme: DefaultTheme) => css`
      &:focus {
        border-color: ${theme.colors.green.primary};
        box-shadow: 0 0 0 3px ${theme.colors.green.primary}33;
      }
    `
  }
};

export const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xs};
    color: ${theme.colors.alerts.error};
    font-size: ${theme.fontSizes.label.labelSmall};
    font-family: ${theme.fontFamilies.primary};
    margin-left: 3px;
  `}
`;

export const SelectContainer = styled.div<{
  $disabled?: boolean;
  $error?: boolean;
}>`
  ${({ theme, $disabled, $error }) => css`
    display: flex;
    flex-direction: column;
    position: relative;

    select {
      padding: ${theme.spacings.xs};
      font-size: ${theme.fontSizes.label.labelSmall};
      border-radius: ${theme.borderRadius.xs};
      font-family: ${theme.fontFamilies.primary};
      font-size: ${theme.fontSizes.body.bodySmall};
      font-weight: ${theme.fontWeight.regular};
      padding-right: ${theme.spacings.lg};
      outline: none;
      transition: border-color 0.2s ease;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      ${$error
        ? modifiers.select.error(theme)
        : modifiers.select.noError(theme)};

      ${!$disabled && !$error && modifiers.select.hover(theme)};
      ${!$disabled && !$error && modifiers.select.focus(theme)};
    }

    .icon {
      position: absolute;
      right: ${theme.spacings.sm};
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      font-size: 0.9rem;
      color: ${$disabled ? theme.colors.gray.medium : theme.colors.gray.text};
    }
  `}
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
  `}
`;
