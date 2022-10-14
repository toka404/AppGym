import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const emptyUser = {
  Input_Nombre: "",
  input_Correo: "",
  input_peso: "",
  Input_altura: "",
};

function PerfilBody() {
  const navigate = useNavigate();
  const [user, setUser] = useState(emptyUser);

  function handleChange(e) {
    e.persist(); //persiste el evento
    setUser((curUser) => {
      return {
        ...curUser,
        [e.target.id]: e.target.value,
      };
    });
  }

  return (
    <div>
      <div id="Perfil">
        <svg className="Trazado_48" viewBox="0 0 429 926">
          <path
            id="Trazado_48"
            d="M 0 0 L 429 0 L 429 926 L 0 926 L 0 0 Z"
          ></path>
        </svg>
        {/* imagen de perfil, falta que se agrande */}
        <img id="n_838764_g" src="/images/Perfil/n_838764_g.png" />
        {/* input nombre */}
        <div id="Grupo_816_ha">
          <div id="Grupo_815_hb">
            <div id="Grupo_850">
              <input
                type="text"
                className="Input_Nombre"
                id="Input_Nombre"
                value={user.Input_Nombre}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* boton de regreso */}
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          <svg className="Polgono_1_im btn" viewBox="0 0 24 29">
            <path id="Polgono_1_im" d="M 12 0 L 24 29 L 0 29 Z"></path>
          </svg>
        </button>
        <div id="Grupo_853">
          <div id="Nombre_hn">
            <span>Nombre:</span>
          </div>
        </div>
        {/* input correo */}
        <div id="Grupo_852">
          <div id="Grupo_901">
            <input
              type="email"
              className="input_Correo"
              id="input_Correo"
              value={user.input_Correo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="Correo">
          <span>Correo:</span>
        </div>
        <div id="Perfil_ht">
          <span>Perfil</span>
        </div>
        <div id="Altura">
          <span>Altura:</span>
        </div>
        <div id="Peso">
          <span>Peso:</span>
        </div>
        {/* input peso */}
        <div id="Grupo_905">
          <div id="Grupo_901_h">
            <input
              type="number"
              className="input_peso"
              id="input_peso"
              value={user.input_peso}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* input altura */}
        <div id="Grupo_906">
          <div id="Grupo_901_ia">
            <input
              type="number"
              className="Input_altura"
              id="Input_altura"
              value={user.Input_altura}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilBody;
