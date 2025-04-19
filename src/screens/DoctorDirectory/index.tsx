import { useState } from "react";
import * as S from "./styles";
import { Doctor, MOCK_DOCTORS } from "@constants/MOCK_DOCTORS";
import { BookingModal } from "./components/BookingModal";
import { DoctorsFilter } from "./components/DoctorsFilter";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { StarRating } from "@components/StarsRating";
import { Typography } from "@components/Typography";

export const DoctorDirectory = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(MOCK_DOCTORS);
  const [selectedDoctorToBook, setSelectedDoctorToBook] =
    useState<Doctor | null>(null);
  return (
    <S.Container>
      <DoctorsFilter setDoctors={setDoctors} />
      <S.DoctorList>
        {doctors.map((doctor) => (
          <S.DoctorCard
            key={doctor.id}
            role="region"
            aria-label={`Doctor card: ${doctor.name}`}
          >
            <S.DoctorAvatarAndInfoContainer>
              <S.DoctorAvatar
                src={doctor.avatarUrl}
                alt={`Photo of ${doctor.name}`}
              />
              <S.DoctorInfo>
                <S.DoctorName>
                  <Typography tag="h3" fontWeight="bold">
                    {doctor.name}
                  </Typography>
                  <Icon iconName="FaCheckCircle" />
                </S.DoctorName>
                <Typography tag="p">{doctor.specialty}</Typography>
                <Typography tag="p">{doctor.location}</Typography>
                <StarRating rating={doctor.rating} />
                <Typography tag="p">
                  {doctor.available ? "Available" : "Unavailable"}
                </Typography>
              </S.DoctorInfo>
            </S.DoctorAvatarAndInfoContainer>
            <S.ButtonContainer>
              <Button
                type="button"
                size="large"
                aria-label={`Book appointment with ${doctor.name}`}
                onClick={() => setSelectedDoctorToBook(doctor)}
              >
                Book Appointment
              </Button>
            </S.ButtonContainer>
          </S.DoctorCard>
        ))}
      </S.DoctorList>
      {selectedDoctorToBook && (
        <BookingModal
          isOpen={!!selectedDoctorToBook}
          onClose={() => setSelectedDoctorToBook(null)}
          selectedDoctor={selectedDoctorToBook}
        />
      )}
    </S.Container>
  );
};
