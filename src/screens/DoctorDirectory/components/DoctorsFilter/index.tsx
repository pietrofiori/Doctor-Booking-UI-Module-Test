import { Doctor } from "@constants/MOCK_DOCTORS";
import * as S from "./styles";
import { Typography } from "@components/Typography";
import { useFilter } from "./hooks/useFilter";

interface DoctorsFilterProps {
  setDoctors: (doctors: Doctor[]) => void;
}

export const DoctorsFilter = ({ setDoctors }: DoctorsFilterProps) => {
  const {
    search,
    specialty,
    onlyAvailable,
    setSearch,
    setSpecialty,
    setOnlyAvailable
  } = useFilter(setDoctors);

  return (
    <S.FilterCard>
      <Typography tag="h2" fontSize="heading5" fontWeight="bold">
        Find A Doctor
      </Typography>
      <S.Filters>
        <S.Input
          placeholder="Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search doctor by name"
        />
        <S.Input
          placeholder="Speciality"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          aria-label="Search doctor by specialty"
        />
        <S.AvailableToggle>
          <label htmlFor="availableToggle">Available</label>
          <input
            id="availableToggle"
            type="checkbox"
            checked={onlyAvailable}
            onChange={() => setOnlyAvailable(!onlyAvailable)}
            aria-label="Toggle only available doctors"
          />
        </S.AvailableToggle>
        <S.SearchButton>Search</S.SearchButton>
      </S.Filters>
    </S.FilterCard>
  );
};
