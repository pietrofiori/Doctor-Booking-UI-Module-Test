import * as S from "./styles";
import { Doctor } from "@constants/MOCK_DOCTORS";
import { MOCK_SPECIALTIES } from "@constants/MOCK_SPECIALTIES";
import { useFilter } from "./hooks/useFilter";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { Switch } from "@components/Switch";
import { Typography } from "@components/Typography";

interface DoctorsFilterProps {
  setDoctors: (doctors: Doctor[]) => void;
}

export const DoctorsFilter = ({ setDoctors }: DoctorsFilterProps) => {
  const { control, handleSearch } = useFilter(setDoctors);

  return (
    <S.FilterCard role="region" aria-label="Doctor search filters">
      <Typography tag="h2" fontSize="heading5" fontWeight="bold">
        Find A Doctor
      </Typography>
      <S.Filters>
        <Input
          placeholder="Search by name"
          control={control}
          name="name"
          aria-label="Search doctor by name"
        />
        <S.SpecialtyLabel htmlFor="specialty">Specialty</S.SpecialtyLabel>
        <Select
          id="specialty"
          name="specialty"
          placeholder="Search by specialty"
          options={MOCK_SPECIALTIES}
          control={control}
          aria-label="Search doctor by specialty"
        />
        <S.AvailabilityContainer>
          <Typography tag="p" fontSize="heading7">
            Show available doctors
          </Typography>
          <Switch
            name="onlyAvailable"
            control={control}
            aria-label="Only show available doctors"
          />
        </S.AvailabilityContainer>
        <Button onClick={handleSearch}>Search</Button>
      </S.Filters>
    </S.FilterCard>
  );
};
