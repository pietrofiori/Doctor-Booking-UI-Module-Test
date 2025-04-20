import { mediaQuery } from "@theme/mediaQuery";
import styled, { css } from "styled-components";

export const FilterCard = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.white.primary};
    padding: 32px 24px;
    border-radius: ${theme.borderRadius.md};
    box-shadow: 0 10px 20px ${theme.colors.shadow.shadow1};
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 48px;
  `
);

export const SpecialtyLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Filters = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr auto 1fr;
  gap: 16px;
  align-items: center;

  ${mediaQuery("xl", "max")`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const AvailabilityContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
`;
