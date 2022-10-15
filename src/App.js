import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Alimentos from "./Pages/Alimentos";
import Reservas from "./Pages/Reservas";
import Calendario from "./Pages/Calendario";
import Perfil from "./Pages/Perfil";
import ProtectedRoute from "./components/ProtectedRoute";
import Eventos from "./Pages/Eventos";
import Registro from "./Pages/Registro";
import { UserContext } from "./components/UserContext";

import { useState } from "react";

const emptyUser = { mail: "a", nombre: null, apellido: null };

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={emptyUser}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/comidas" element={<Alimentos />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/perfil" element={<Perfil />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registro />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
