import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import * as S from "./styles";
import { Typography } from "@components/Typography";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps<T extends FieldValues> {
  name: Path<T>;
  control?: Control<T>;
  id?: string;
  options: Option[];
  disabled?: boolean;
  label?: string;
  error?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
}

export const Select = <T extends FieldValues>({
  name,
  id,
  control,
  options,
  disabled = false,
  label,
  error,
  placeholder = "Selecione uma opção",
  onValueChange
}: SelectProps<T>) => {
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
          </Typography>
        </S.TextContainer>
      )}
      <S.SelectContainer $disabled={disabled} $error={!!error}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <select
              id={id}
              {...field}
              disabled={disabled}
              value={field.value || ""}
              onChange={(event) => {
                field.onChange(event.target.value);
                if (onValueChange) {
                  onValueChange(event.target.value);
                }
              }}
            >
              <option value="" disabled>
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  <Typography>{option.label}</Typography>
                </option>
              ))}
            </select>
          )}
        />
        <FaChevronDown className="icon" />
      </S.SelectContainer>
      {error && (
        <S.ErrorContainer>
          <Typography fontSize="labelLarge" tag="span">
            {error}
          </Typography>
        </S.ErrorContainer>
      )}
    </S.ComponentContainer>
  );
};
