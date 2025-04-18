import { Outlet, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Header } from "@components/Header";

export const BaseLayout = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Header
        onClickHome={() => navigate("/home")}
        onClickAppointments={() => navigate("/appointments")}
      />
      <Outlet />
    </S.Container>
  );
};
