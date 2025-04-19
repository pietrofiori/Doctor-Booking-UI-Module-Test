import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const modifiers = {
  selected: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green.primary};
    color: ${theme.colors.white.primary};

    &:hover {
      background-color: ${theme.colors.green.disabled};
    }
  `,
  unselected: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray.light};
    color: ${theme.colors.gray.text};

    &:hover {
      background-color: ${theme.colors.gray.border};
    }
  `
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.md};
  height: 100%;
  padding: ${({ theme }) => theme.spacings.md};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
`;

export const DoctorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm};
`;

export const DoctorImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  object-fit: cover;
`;

export const NameAndSpecialty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.xs};

  svg {
    fill: ${({ theme }) => theme.colors.green.primary};
  }
`;

export const TimeSlotsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  gap: ${({ theme }) => theme.spacings.sm};
`;

export const TimeSlot = styled.button<{ selected: boolean }>(
  ({ theme, selected }) => css`
    padding: 8px 16px;
    border-radius: ${theme.borderRadius.xs};
    border: none;
    cursor: pointer;
    transition: background-color 0.5s ease;
    ${selected ? modifiers.selected(theme) : modifiers.unselected(theme)};
  `
);

export const ConfirmButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;
