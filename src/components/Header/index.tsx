import * as S from "./styles";
import { Typography } from "@components/Typography";

interface HeaderProps {
  onClickHome: () => void;
  onClickAppointments: () => void;
}

export const Header = ({ onClickHome, onClickAppointments }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.LogoSection>
        <img src="" alt="Logo" />
        <Typography>Doctor Booking UI Module</Typography>
      </S.LogoSection>

      <S.NavMenu>
        <S.NavItem onClick={onClickHome}>
          <Typography>Home</Typography>
        </S.NavItem>
        <S.NavItem onClick={onClickAppointments}>
          <Typography>Appointments</Typography>
        </S.NavItem>
      </S.NavMenu>
    </S.HeaderContainer>
  );
};
