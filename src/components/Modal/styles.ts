import styled, { css } from "styled-components";

const modifiers = {
  overlayVisible: () => css`
    visibility: visible;
    background: rgba(0, 0, 0, 0.5);
  `,
  overlayHidden: () => css`
    visibility: hidden;
    background: transparent;
  `,
  contentVisible: () => css`
    transform: scale(1);
    opacity: 1;
  `,
  contentHidden: () => css`
    transform: scale(0.95);
    opacity: 0;
  `
};

export const Header = styled.div<{ $hasTitle: boolean }>`
  ${({ theme, $hasTitle }) => css`
    display: flex;
    justify-content: ${$hasTitle ? "space-between" : "flex-end"};
    align-items: center;
    margin: 5px 15px 0px;
    padding: 10px 10px 0px 10px;
    color: ${theme.colors.black.primary};
  `}
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  ${({ $isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: all 0.3s ease-in-out;

    ${$isOpen ? modifiers.overlayVisible() : modifiers.overlayHidden()};
  `}
`;

export const Content = styled.div<{
  $isOpen: boolean;
  $width?: string;
  $height?: string;
}>`
  ${({ theme, $isOpen, $width, $height }) => css`
    width: ${$width || "500px"};
    height: ${$height || "auto"};
    max-width: 90%;
    background-color: ${theme.colors.white.primary};
    border-radius: ${theme.borderRadius.xs};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 0px;
    transition: all 0.3s ease-in-out;
    overflow: auto;

    ${$isOpen ? modifiers.contentVisible() : modifiers.contentHidden()};

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.green.disabled};
      border-radius: ${theme.borderRadius.xs};
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.green.disabled}BB;
    }
    &::-webkit-scrollbar-track {
      background: ${theme.colors.green.disabled}44;
    }
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: white;
    &:focus {
      border: 2px solid ${theme.colors.green.primary};
      border-radius: ${theme.borderRadius.xs};
    }
  `}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TitleIcon = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.green.primary};
  }
`;
