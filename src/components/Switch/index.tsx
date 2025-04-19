import { Control, Controller, FieldValues, Path } from "react-hook-form";
import * as S from "./styles";

interface SwitchProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  disabled?: boolean;
  ariaLabel?: string;
}

export const Switch = <T extends FieldValues>({
  name,
  control,
  disabled,
  ariaLabel
}: SwitchProps<T>) => {
  return (
    <S.SwitchContainer>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <S.Slider
            checked={field.value}
            onClick={!disabled ? () => field.onChange(!field.value) : undefined}
            aria-label={ariaLabel}
          />
        )}
      />
    </S.SwitchContainer>
  );
};
