import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { Typography } from "@components/Typography";
import { Logo } from "@assets/svgs/dynamics/Logo";

interface HeaderProps {
  onClickHome: () => void;
  onClickAppointments: () => void;
}

export const Header = ({ onClickHome, onClickAppointments }: HeaderProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isAppointments = location.pathname === "/appointments";
  return (
    <S.HeaderContainer>
      <S.LogoSection>
        <Logo />
        <Typography>Doctor Booking UI Module </Typography>
      </S.LogoSection>
      <S.NavMenu>
        <S.NavItem onClick={onClickHome}>
          <Typography color={isHome ? "green.primary" : "gray.text"}>
            Home
          </Typography>
        </S.NavItem>
        <S.NavItem onClick={onClickAppointments}>
          <Typography color={isAppointments ? "green.primary" : "gray.text"}>
            Appointments
          </Typography>
        </S.NavItem>
      </S.NavMenu>
    </S.HeaderContainer>
  );
};
