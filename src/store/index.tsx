import { create } from "zustand";
import { Doctor } from "@constants/MOCK_DOCTORS";

interface Appointment {
  doctor: Doctor;
  time: string;
}

interface AppointmentsState {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
}

export const useAppointmentsStore = create<AppointmentsState>((set) => ({
  appointments: [],
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment]
    }))
}));
