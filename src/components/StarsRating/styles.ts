import styled from "styled-components";

export const StarsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Star = styled.div<{ $filled: boolean }>`
  color: ${({ theme, $filled }) =>
    $filled ? theme.colors.green.primary : theme.colors.gray.medium};
`;
