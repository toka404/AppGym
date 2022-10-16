import React from "react";
import { useState } from "react";
import BotonBack from "./BotonBack";
import { useUser } from "../components/UserContext";
import { useNavigate } from "react-router-dom";
import { crearDocumento } from "../Hooks/useDoc";

const emptyRegistro = {
  Input_nombre: "",
  Input_apellido: "",
  Input_email: "",
  Input_contrasena: "",
  Input_contrasenaF: "",
};

function CrearUsuarioBody() {
  const [registro, setRegistro] = useState(emptyRegistro);
  const navigate = useNavigate();
  const { signup, update } = useUser();

  function handleChange(e) {
    e.persist(); //persiste el evento
    setRegistro((curRegistro) => {
      return {
        ...curRegistro,
        [e.target.id]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (registro.Input_contrasena === registro.Input_contrasenaF) {
        await signup(registro.Input_email, registro.Input_contrasena);
        await update(registro.Input_nombre);
        await crearDocumento("usuarios", registro.Input_email, {
          nombre: registro.Input_nombre,
          apellido: registro.Input_apellido,
          peso: "",
          altura: "",
        });
        navigate("/");
      } else console.log("Las contraseñas no coinciden");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div id="Usuario">
        <svg className="img_fondo">
          <rect
            id="img_fondo"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="431"
            height="926"
          ></rect>
        </svg>

        {/* boton regreso */}
        <BotonBack />

        <form onSubmit={handleSubmit}>
          <div id="lbl_Crear_Usuario">
            <span>Crear Usuario</span>
          </div>

          <div id="lbl_nombre">
            <span>Nombre:</span>
          </div>

          <div id="img_Nombre">
            <input
              type="text"
              className="Input_nombre"
              id="Input_nombre"
              value={registro.Input_nombre}
              onChange={handleChange}
            />

            <svg className="Lnea_1_c" viewBox="0 0 314 5">
              <path id="Lnea_1_c" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="lbl_apellido">
            <span>Apellido:</span>
          </div>

          <div id="img_Email">
            <input
              type="text"
              className="Input_apellido"
              id="Input_apellido"
              value={registro.Input_apellido}
              onChange={handleChange}
            />

            <svg className="Lnea_2_c" viewBox="0 0 314 5">
              <path id="Lnea_2_c" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="lbl_email">
            <span>Email:</span>
          </div>

          <div id="img_email">
            <input
              type="email"
              className="Input_email"
              id="Input_email"
              value={registro.Input_email}
              onChange={handleChange}
            />

            <svg className="Lnea_4" viewBox="0 0 314 5">
              <path id="Lnea_4" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="lbl_contrasena">
            <span>Contraseña:</span>
          </div>

          <div id="img_contrasenaIni">
            <input
              type="password"
              className="Input_contrasena"
              id="Input_contrasena"
              value={registro.Input_contrasena}
              onChange={handleChange}
            />

            <svg className="Lnea_3_c" viewBox="0 0 314 5">
              <path id="Lnea_3_c" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="lbl_contrasenaF">
            <span>Confirmar contraseña:</span>
          </div>

          <div id="img_contrasenaF">
            <input
              type="password"
              className="Input_contrasenaF"
              id="Input_contrasenaF"
              value={registro.Input_contrasenaF}
              onChange={handleChange}
            />

            <svg className="Lnea_4_c" viewBox="0 0 314 5">
              <path id="Lnea_4_c" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          {/* boton Crear Cuenta */}
          <button>
            <div id="btn_ingresar" className="btn">
              <svg className="Rectngulo_98_db ">
                <rect
                  id="Rectngulo_98_db"
                  rx="9"
                  ry="9"
                  x="0"
                  y="0"
                  width="200"
                  height="62"
                ></rect>
              </svg>
              <div id="Ingresar_dc">
                <span>Crear cuenta</span>
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CrearUsuarioBody;
