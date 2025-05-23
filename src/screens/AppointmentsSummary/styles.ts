import { mediaQuery } from "@theme/mediaQuery";
import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 32px 10%;
  background-color: ${({ theme }) => theme.colors.white.bg};
  min-height: 100vh;
`;

export const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

export const AppointmentCard = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: 20px;
    background-color: ${theme.colors.white.primary};
    border: 1px solid ${theme.colors.gray.border};
    border-radius: ${theme.borderRadius.sm};
    box-shadow: 0 2px 6px ${theme.colors.shadow.shadow1};
    padding: 16px;
    align-items: center;

    ${mediaQuery("md", "max")`
      h3{
      font-size: 1.6rem;
      }
      p{
      font-size: 1.4rem;
      }
  `}

    ${mediaQuery("xs", "max")`
      h3{
      font-size: 1.4rem;
      }
      p{
      font-size: 1.3rem;
      }
  `}
  `
);

export const DoctorName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
  justify-content: flex-start;

  svg {
    fill: ${({ theme }) => theme.colors.green.primary};
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
