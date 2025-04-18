import { createBrowserRouter, Navigate } from "react-router-dom";
import { DoctorDirectory } from "@screens/DoctorDirectory";
import { BaseLayout } from "@layout/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/home",
        element: <DoctorDirectory />
      },
      {
        path: "/appointments"
        // element: <AppointmentsSummary />
      }
    ]
  }
]);
