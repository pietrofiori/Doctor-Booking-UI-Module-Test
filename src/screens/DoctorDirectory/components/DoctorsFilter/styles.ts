import styled from "styled-components";

export const FilterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white.primary};
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow.shadow1};
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.green.primary};
  border-radius: 6px;
  font-size: 1.4rem;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green.primary};
    box-shadow: 0 0 0 2px rgba(0, 126, 133, 0.2);
  }
`;

export const AvailableToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-size: 1.4rem;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: ${({ theme }) => theme.colors.green.primary};
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green.primary};
  color: ${({ theme }) => theme.colors.white.primary};
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: #00666b;
  }
`;
