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
}

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Diego Morales",
    specialty: "Orthopedic Surgeon",
    available: true,
    location: "1000 Pine Street, San Francisco, CA, 94108",
    rating: 4.6,
    avatarUrl: doctorDiego
  },
  {
    id: "2",
    name: "Dr. Jackson Carter",
    specialty: "Neurologist",
    available: true,
    location: "425 Lexington Ave, New York, NY, 10017",
    rating: 4.3,
    avatarUrl: doctorJackson
  },
  {
    id: "3",
    name: "Dr. Justin Thompson",
    specialty: "Pediatrician",
    available: true,
    location: "888 Howard St, San Diego, CA, 92103",
    rating: 4.7,
    avatarUrl: doctorJustin
  },
  {
    id: "4",
    name: "Dr. Marina Lopez",
    specialty: "Psychiatrist",
    available: true,
    location: "200 W Adams St, Chicago, IL, 60606",
    rating: 4.4,
    avatarUrl: doctorMarina
  },
  {
    id: "5",
    name: "Dr. Michael Nguyen",
    specialty: "General Practitioner",
    available: true,
    location: "1600 Amphitheatre Parkway, Mountain View, CA, 94043",
    rating: 4.8,
    avatarUrl: doctorMichael
  },
  {
    id: "6",
    name: "Dr. Sarah Kim",
    specialty: "Endocrinologist",
    available: true,
    location: "50 Milk St, Boston, MA, 02109",
    rating: 4.2,
    avatarUrl: doctorSarah
  },
  {
    id: "7",
    name: "Dr. Skyler James",
    specialty: "Oncologist",
    available: true,
    location: "300 Montgomery St, San Francisco, CA, 94104",
    rating: 4.5,
    avatarUrl: doctorSkyler
  },
  {
    id: "8",
    name: "Dr. Tania Brooks",
    specialty: "Ophthalmologist",
    available: true,
    location: "1201 Fannin St, Houston, TX, 77002",
    rating: 4.1,
    avatarUrl: doctorTania
  }
];
