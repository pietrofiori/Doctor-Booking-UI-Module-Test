import { useEffect, useState } from "react";
import { MOCK_DOCTORS } from "@constants/MOCK_DOCTORS";

export const useFilter = (setDoctors: (docs: typeof MOCK_DOCTORS) => void) => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  useEffect(() => {
    const filtered = MOCK_DOCTORS.filter((doc) => {
      return (
        (!search || doc.name.toLowerCase().includes(search.toLowerCase())) &&
        (!specialty ||
          doc.specialty.toLowerCase().includes(specialty.toLowerCase())) &&
        (!onlyAvailable || doc.available)
      );
    });

    setDoctors(filtered);
  }, [search, specialty, onlyAvailable, setDoctors]);

  return {
    search,
    specialty,
    onlyAvailable,
    setSearch,
    setSpecialty,
    setOnlyAvailable
  };
};
