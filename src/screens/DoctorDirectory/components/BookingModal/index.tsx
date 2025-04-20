import { useState } from "react";
import * as S from "./styles";
import { Doctor } from "@constants/MOCK_DOCTORS";
import { useAppointmentsStore } from "@store";
import { toast } from "sonner";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { Modal } from "@components/Modal";
import { Typography } from "@components/Typography";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDoctor: Doctor;
}

export const BookingModal = ({
  isOpen,
  onClose,
  selectedDoctor
}: BookingModalProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { addAppointment } = useAppointmentsStore();
  const handleSelectedTime = (time: string) => {
    if (selectedTime === time) {
      setSelectedTime(null);
      return;
    }
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedTime) {
      addAppointment({
        doctor: selectedDoctor,
        time: selectedTime
      });
      toast.success("Appointment Booked Successfully");
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="700px" height="500px">
      <S.Container>
        <S.Header>
          <Typography
            id="booking-title"
            tag="h2"
            fontSize="heading3"
            fontWeight="bold"
          >
            Book Appointment
          </Typography>
        </S.Header>

        <S.DoctorInfo>
          <S.DoctorImage
            src={selectedDoctor.avatarUrl}
            alt={`Portrait of ${selectedDoctor.name}`}
          />
          <S.NameAndSpecialty>
            <S.NameContainer>
              <Typography fontWeight="bold">{selectedDoctor.name}</Typography>
              <Icon iconName="FaCheckCircle" />
            </S.NameContainer>
            <Typography fontSize="bodySmall">
              {selectedDoctor.specialty}
            </Typography>
          </S.NameAndSpecialty>
        </S.DoctorInfo>
        <Typography fontSize="bodyNormal" fontWeight="semibold">
          Select a time slot:
        </Typography>
        <S.TimeSlotsWrapper>
          {selectedDoctor.availableTimes.map((time) => (
            <S.TimeSlot
              key={time}
              selected={selectedTime === time}
              onClick={() => handleSelectedTime(time)}
              role="button"
              aria-pressed={selectedTime === time}
              tabIndex={0}
            >
              <Typography fontWeight="bold" fontSize="bodySmall">
                {time}
              </Typography>
            </S.TimeSlot>
          ))}
        </S.TimeSlotsWrapper>

        <S.ConfirmButtonWrapper>
          <Button
            type="button"
            size="large"
            onClick={handleConfirm}
            disabled={!selectedTime}
            aria-disabled={!selectedTime}
            aria-label={
              selectedTime
                ? `Confirm appointment at ${selectedTime}`
                : "Select a time slot before confirming"
            }
          >
            Confirm Appointment
          </Button>
        </S.ConfirmButtonWrapper>
      </S.Container>
    </Modal>
  );
};
