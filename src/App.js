// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
