import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Alimentos from "./Pages/Alimentos";
import Reservas from "./Pages/Reservas";
import Calendario from "./Pages/Calendario";
import Perfil from "./Pages/Perfil";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext } from "./components/UserContext";
import CrearUsuarioBody from "./components/CrearUsuarioBody";

import { useState } from "react";

const emptyUser = { mail: null, nombre: null, apellido: null };

function App() {
  const [aux, setAux] = useState("");

  return (
    <div className="App">
      {/* <UserContext.Provider value={emptyUser}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/registro" element={<h1>Registro</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/eventos" element={<h1>Eventos</h1>} />
            <Route path="/comidas" element={<Alimentos />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/perfil" element={<Perfil />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider> */}
      <CrearUsuarioBody />
    </div>
  );
}

export default App;
