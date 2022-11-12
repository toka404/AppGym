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
import { AuthProvider } from "./components/UserContext";
import ReservaEvento from "./Pages/ReservaEvento";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/comidas" element={<Alimentos />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/reservae" element={<ReservaEvento />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registro />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
