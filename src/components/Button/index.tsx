import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "medium" | "large" | "full";
  width?: string;
  height?: string;
  $variant?: "solid" | "text" | "tonal" | "outlined";
  onClick?: () => void;
}

export const Button = ({
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button {...rest}>
      {children}
    </S.Button>
  );
};
