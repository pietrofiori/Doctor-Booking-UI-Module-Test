import { FieldValues, useForm } from "react-hook-form";
import { Doctor, MOCK_DOCTORS } from "@constants/MOCK_DOCTORS";

export const useFilter = (setDoctors: (docs: Doctor[]) => void) => {
  const { control, watch } = useForm<FieldValues>();
  const [name, specialty, onlyAvailable] = watch([
    "name",
    "specialty",
    "onlyAvailable"
  ]);

  const handleSearch = () => {
    const filtered = MOCK_DOCTORS.filter((doctor) => {
      return (
        (!name || doctor.name.toLowerCase().includes(name.toLowerCase())) &&
        (!specialty ||
          doctor.specialty.toLowerCase().includes(specialty.toLowerCase())) &&
        (!onlyAvailable || doctor.available)
      );
    });

    setDoctors(filtered);
  };

  return {
    control,
    handleSearch
  };
};
