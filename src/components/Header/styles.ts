import { mediaQuery } from "@/theme/mediaQuery";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10%;
  background-color: ${({ theme }) => theme.colors.white.bg};
  height: 70px;

  ${mediaQuery("sm", "max")`
    flex-direction: column;
    gap: 8px;
    height: auto;
    padding: 12px 5%;
  `}
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.gray.light};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 24px;

  ${mediaQuery("sm", "max")`
    gap: 16px;
  `}
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.green.primary};
  }
`;
