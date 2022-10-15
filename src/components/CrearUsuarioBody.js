import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  function handleChange(e) {
    e.persist(); //persiste el evento
    setRegistro((curRegistro) => {
      return {
        ...curRegistro,
        [e.target.id]: e.target.value,
      };
    });
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
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          <svg className="btnBack btn" viewBox="0 0 24 29">
            <path className="btnBack_Class" d="M 12 0 L 24 29 L 0 29 Z"></path>
          </svg>
        </button>

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
        <button
          onClick={() => {
            console.log("Crear cuenta");
          }}
        >
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
      </div>
    </div>
  );
}

export default CrearUsuarioBody;
