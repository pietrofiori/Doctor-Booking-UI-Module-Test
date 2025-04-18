import { ChangeEvent, InputHTMLAttributes } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import * as S from "./styles";
import { Icon, IconProps } from "@components/Icon";
import { Typography } from "@components/Typography";

export interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  control: Control<T>;
  inputSize?: "small" | "large";
  label?: string;
  icon?: IconProps["iconName"];
  iconPosition?: "left" | "right";
  error?: string;
  secondaryOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = <T extends FieldValues>({
  name,
  control,
  inputSize = "small",
  label,
  icon,
  iconPosition = "right",
  error,
  type,
  secondaryOnChange,
  ...restInputProps
}: InputProps<T>) => {
  return (
    <S.ComponentContainer>
      {label && (
        <S.TextContainer>
          <Typography
            tag="label"
            fontSize="bodySmall"
            fontFamily="primary"
            fontWeight="semibold"
          >
            {label}
            {restInputProps.required && <b>*</b>}
          </Typography>
        </S.TextContainer>
      )}
      <S.InputContainer>
        {icon && (
          <S.IconContainer $iconPosition={iconPosition}>
            <Icon iconName={icon} size={20} />
          </S.IconContainer>
        )}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <S.Input
              $iconPosition={iconPosition}
              {...restInputProps}
              $size={inputSize}
              $error={!!error}
              $icon={!!icon}
              type={type || "text"}
              value={field.value || ""}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                field.onChange(event.target.value);
              }}
            />
          )}
        />
      </S.InputContainer>
      {error && (
        <S.ErrorContainer>
          <Typography fontSize="labelLarge" fontFamily="primary" tag="span">
            {error}
          </Typography>
        </S.ErrorContainer>
      )}
    </S.ComponentContainer>
  );
};
