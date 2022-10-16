import React from "react";
import BotonBack from "./BotonBack";
import { useState, useEffect } from "react";
import useDoc from "../Hooks/useDoc";
import { useUser } from "./UserContext";

const emptyUser = {
  Input_Nombre: "",
  input_Correo: "",
  input_peso: "",
  Input_altura: "",
};

function PerfilBody() {
  const [user, setUser] = useState(emptyUser);
  const { usuarioLoged } = useUser();

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
        <img
          id="n_838764_g"
          src="/images/Perfil/n_838764_g.png"
          alt="foto de perfil"
        />

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
        <BotonBack />

        <div id="Grupo_853">
          <div id="Nombre_hn">
            <span>Nombre:</span>
          </div>
        </div>
        {/* input correo */}
        <div id="Grupo_852">
          <div id="Grupo_901">
            <input
              type="text"
              className="input_Correo"
              id="input_Correo"
              value={user.input_Correo}
              onChange={handleChange}
              readOnly="readOnly"
            />
          </div>
        </div>
        <div id="Correo">
          <span>Correo:</span>
        </div>
        <div id="Perfil_ht">
          <span>Perfil</span>
        </div>

        <div id="BtnLog_ht">

          {/* Botón Log out */}
          <div className="fondoBtnLogOut btn">
            <svg className="fondoBtn" viewBox="0 0 285 90">
              <path
                className="fondoBtnClassLogOut"
                d="M 18 0 L 171 0 C 180.9411315917969 0 189 8.058874130249023 189 18 L 189 36 C 189 45.94112396240234 180.9411315917969 54 171 54 L 18 54 C 8.058874130249023 54 0 45.94112396240234 0 36 L 0 18 C 0 8.058874130249023 8.058874130249023 0 18 0 Z"
              ></path>
            </svg>

            <div className="LogOutPerfilbtn">
              <span>Cerrar sesión</span>
            </div>
          </div>

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

        {/* Botón Actualizar */}
        <div className="BtnActualizar btn">
          <svg className="fondoBtnActu" viewBox="0 0 225 60">
            <path
              className="fondoBtnClassActu"
              d="M 18 0 L 171 0 C 180.9411315917969 0 189 8.058874130249023 189 18 L 189 36 C 189 45.94112396240234 180.9411315917969 54 171 54 L 18 54 C 8.058874130249023 54 0 45.94112396240234 0 36 L 0 18 C 0 8.058874130249023 8.058874130249023 0 18 0 Z"
            ></path>
          </svg>

          <div className="ActualizarPerfilbtn">
            <span>Actualizar</span>
          </div>
        </div>






      </div>
    </div>
  );
}

export default PerfilBody;
