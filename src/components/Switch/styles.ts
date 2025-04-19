import styled, { css, DefaultTheme } from "styled-components";

export const switchModifiers = {
  checked: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green.primary};
  `,
  unchecked: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green.disabled};
  `,
  sliderPosition: (checked: boolean) => css`
    left: ${checked ? "28px" : "4px"};
  `
};

export const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 25px;
  position: relative;
`;

export const Slider = styled.div<{ checked: boolean }>`
  width: 50px;
  height: 25px;
  border-radius: 25px;
  position: relative;
  transition:
    background 0.3s ease,
    opacity 0.3s ease;

  ${({ checked, theme }) => css`
    ${checked
      ? switchModifiers.checked(theme)
      : switchModifiers.unchecked(theme)}
  `}

  &:before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition: left 0.3s ease;
    ${({ checked }) => switchModifiers.sliderPosition(checked)}
  }
`;
