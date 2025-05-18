// Import StrictMode dari React untuk mengaktifkan mode ketat yang membantu mendeteksi masalah dalam aplikasi React
import { StrictMode } from "react";

// Import createRoot dari react-dom/client untuk membuat root React DOM yang akan dirender
import { createRoot } from "react-dom/client";

// Import file CSS utama untuk styling aplikasi
import "./index.css";

// Import komponen utama aplikasi dari file App.tsx
import App from "./App.tsx";

// Import AOS (Animate On Scroll) library untuk animasi saat scroll halaman
import AOS from "aos";

// Import stylesheet default AOS untuk animasi
import "aos/dist/aos.css";

// Inisialisasi AOS agar animasi berjalan saat user scroll halaman
AOS.init();

// Buat root React di elemen dengan id "root" di index.html dan render aplikasi di dalam StrictMode
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
