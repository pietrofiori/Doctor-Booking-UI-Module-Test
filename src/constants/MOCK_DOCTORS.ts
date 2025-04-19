import doctorDiego from "@assets/images/doctor-diego.jpg";
import doctorJackson from "@assets/images/doctor-jackson.jpg";
import doctorJustin from "@assets/images/doctor-justin.jpg";
import doctorMarina from "@assets/images/doctor-marina.jpg";
import doctorMichael from "@assets/images/doctor-michael.jpg";
import doctorSarah from "@assets/images/doctor-sarah.jpg";
import doctorSkyler from "@assets/images/doctor-skyler.jpg";
import doctorTania from "@assets/images/doctor-tania.jpg";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  available: boolean;
  location: string;
  rating: number;
  avatarUrl: string;
  availableTimes: string[];
}

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Diego Morales",
    specialty: "Orthopedic Surgeon",
    available: true,
    location: "1000 Pine Street, San Francisco, CA, 94108",
    rating: 4.6,
    avatarUrl: doctorDiego,
    availableTimes: [
      "08:00 AM",
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM",
      "05:00 PM"
    ]
  },
  {
    id: "2",
    name: "Dr. Jackson Carter",
    specialty: "Neurologist",
    available: false,
    location: "425 Lexington Ave, New York, NY, 10017",
    rating: 4.3,
    avatarUrl: doctorJackson,
    availableTimes: [
      "08:30 AM",
      "09:30 AM",
      "10:30 AM",
      "11:30 AM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ]
  },
  {
    id: "3",
    name: "Dr. Justin Thompson",
    specialty: "Pediatrician",
    available: true,
    location: "888 Howard St, San Diego, CA, 92103",
    rating: 4.7,
    avatarUrl: doctorJustin,
    availableTimes: [
      "07:45 AM",
      "08:30 AM",
      "09:15 AM",
      "10:00 AM",
      "10:45 AM",
      "11:30 AM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM"
    ]
  },
  {
    id: "4",
    name: "Dr. Marina Lopez",
    specialty: "Psychiatrist",
    available: true,
    location: "200 W Adams St, Chicago, IL, 60606",
    rating: 4.4,
    avatarUrl: doctorMarina,
    availableTimes: [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ]
  },
  {
    id: "5",
    name: "Dr. Michael Nguyen",
    specialty: "General Practitioner",
    available: true,
    location: "1600 Amphitheatre Parkway, Mountain View, CA, 94043",
    rating: 4.8,
    avatarUrl: doctorMichael,
    availableTimes: [
      "08:00 AM",
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM",
      "05:00 PM"
    ]
  },
  {
    id: "6",
    name: "Dr. Sarah Kim",
    specialty: "Endocrinologist",
    available: true,
    location: "50 Milk St, Boston, MA, 02109",
    rating: 4.2,
    avatarUrl: doctorSarah,
    availableTimes: [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ]
  },
  {
    id: "7",
    name: "Dr. Skyler James",
    specialty: "Oncologist",
    available: false,
    location: "300 Montgomery St, San Francisco, CA, 94104",
    rating: 4.5,
    avatarUrl: doctorSkyler,
    availableTimes: [
      "08:00 AM",
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ]
  },
  {
    id: "8",
    name: "Dr. Tania Brooks",
    specialty: "Ophthalmologist",
    available: false,
    location: "1201 Fannin St, Houston, TX, 77002",
    rating: 4.1,
    avatarUrl: doctorTania,
    availableTimes: [
      "08:15 AM",
      "09:15 AM",
      "10:15 AM",
      "11:15 AM",
      "12:15 PM",
      "01:15 PM",
      "02:15 PM",
      "03:15 PM",
      "04:15 PM"
    ]
  }
];
