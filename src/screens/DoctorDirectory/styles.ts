import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 32px 10%;
  background-color: ${({ theme }) => theme.colors.white.bg};
  min-height: 100vh;
`;

export const DoctorList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: ${({ theme }) => theme.spacings.md};
`;

export const DoctorCard = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacings.sm};
    padding: 12px;
    background-color: ${theme.colors.white.primary};
    border: 1px solid ${theme.colors.gray.border};
    border-radius: ${theme.borderRadius.sm};
    width: 100%;
    box-shadow: 0 2px 4px ${theme.colors.shadow.shadow1};
  `
);

export const DoctorAvatarAndInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.md};
`;
export const DoctorAvatar = styled.img`
  width: 30%;
  height: 100%;
  object-fit: contain;
`;
export const DoctorInfo = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const DoctorName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.colors.green.primary};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
