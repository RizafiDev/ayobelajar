// Import komponen utama dari react-router-dom untuk routing di aplikasi React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import halaman Homepage yang akan ditampilkan pada route "/"
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      {/* Router membungkus seluruh aplikasi agar routing dapat bekerja */}
      <Router>
        {/* Routes berisi kumpulan Route yang akan dirender berdasarkan URL */}
        <Routes>
          {/* Route untuk path "/" yang akan menampilkan komponen Homepage */}
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

// Export komponen App sebagai default agar dapat digunakan di index.tsx atau tempat lain
export default App;
