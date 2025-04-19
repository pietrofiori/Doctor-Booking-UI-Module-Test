import styled from "styled-components";

export const FilterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white.primary};
  padding: 32px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 10px 20px ${({ theme }) => theme.colors.shadow.shadow1};
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
`;

export const Filters = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr auto 1fr;
  gap: 16px;
  align-items: center;
`;

export const AvailabilityContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
`;
