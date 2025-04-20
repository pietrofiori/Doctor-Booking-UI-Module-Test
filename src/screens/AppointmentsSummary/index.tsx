import * as S from "./styles";
import { useAppointmentsStore } from "@store";
import { Icon } from "@components/Icon";
import { StarRating } from "@components/StarsRating";
import { Typography } from "@components/Typography";

export const AppointmentsSummary = () => {
  const { appointments } = useAppointmentsStore();

  return (
    <S.Container role="region" aria-labelledby="appointments-title">
      <Typography
        id="appointments-title"
        tag="h2"
        fontSize="heading4"
        fontWeight="bold"
      >
        My Appointments
      </Typography>
      {appointments.length === 0 ? (
        <Typography tag="p" aria-live="polite">
          You have no appointments yet.
        </Typography>
      ) : (
        <S.AppointmentList role="list">
          {appointments.map((appointment, index) => (
            <S.AppointmentCard
              key={index}
              role="listitem"
              aria-labelledby={`doctor-${index}`}
            >
              <S.Avatar
                src={appointment.doctor.avatarUrl}
                alt=""
                role="img"
                aria-label={`Portrait of ${appointment.doctor.name}`}
              />
              <S.Info>
                <S.DoctorName>
                  <Typography tag="h3" fontWeight="bold">
                    {appointment.doctor.name}
                  </Typography>
                  <Icon iconName="FaCheckCircle" size={14}/>
                </S.DoctorName>
                <Typography tag="p">{appointment.doctor.specialty}</Typography>
                <Typography tag="p">{appointment.doctor.location}</Typography>
                <Typography fontWeight="semibold" tag="p">
                  Time: {appointment.time}
                </Typography>
                <StarRating rating={appointment.doctor.rating} />
              </S.Info>
            </S.AppointmentCard>
          ))}
        </S.AppointmentList>
      )}
    </S.Container>
  );
};
