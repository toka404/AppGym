import "./App.css";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Alimentos from "./Alimentos";
import Reservas from "./Reservas";
import Calendario from "./Calendario";
import Perfil from "./Perfil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/registro" element={<h1>Registro</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/eventos" element={<h1>Eventos</h1>} />
        <Route path="/comidas" element={<Alimentos />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}

export default App;
