## 📦 Setup Instructions

1. Install dependencies:  
   `pnpm install`

2. Start the development server:  
   `pnpm run dev`

3. Open in your browser:  
   `http://localhost:5173`

## 🧱 Project Structure & Architecture

- `/components`: Reusable UI elements like Button, Typography, Modal, etc.
- `/screens`: Top-level views like `DoctorDirectory` and `AppointmentsSummary`.
- `/constants`: Mock data used for development (`MOCK_DOCTORS`, `SPECIALTIES`).
- `/store`: Zustand store for managing global state (appointments).
- `/assets`: Static assets like doctor avatars and SVG logos.
- `/theme`: Theme configuration (fonts, spacing, breakpoints, colors).

Custom hooks and context logic are colocated with their respective components for modularity and reusability.

> The main content of the UI can be found in the `/screens` directory.

## 🤖 Use of AI Tools

AI tools like ChatGPT were used to:

- Create mock data for doctors and specialties
- Scaffold components efficiently
- Improve accessibility (ARIA, keyboard navigation, semantic HTML)

## 🚀 Next Steps & Known Limitations

- 🔄 **API Integration**: Connect to a backend to persist appointments
- ✅ Add form validation and user feedback for booking flow
- 📱 Minor layout refinements for smaller devices
- 🧪 Optional: Add unit tests using Vitest + React Testing Library
