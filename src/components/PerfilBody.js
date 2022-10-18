import React from "react";
import BotonBack from "./BotonBack";
import { useState } from "react";
import { crearDocumento } from "../Hooks/useDoc";
import { useUser } from "./UserContext";

// const emptyUser = {
//   Input_Nombre: "",
//   input_Correo: "",
//   input_peso: "",
//   Input_altura: "",
// };

function PerfilBody() {
  const { usuarioLoged, logOut, informacion } = useUser();
  const [user, setUser] = useState({
    Input_Nombre: informacion.nombre,
    Input_Apellido: informacion.apellido,
    input_Correo: usuarioLoged.email,
    input_peso: informacion.peso,
    Input_altura: informacion.altura,
  });

  function handleChange(e) {
    e.persist(); //persiste el evento
    setUser((curUser) => {
      return {
        ...curUser,
        [e.target.id]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(user.input_Correo);
      await crearDocumento("usuarios", user.input_Correo, {
        nombre: user.Input_Nombre,
        apellido: user.Input_Apellido,
        peso: user.input_peso,
        altura: user.Input_altura,
      });
      alert("done");
    } catch (error) {
      console.log(error);
    }
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

        {/* Botón Log out */}
        <button onClick={logOut}>
          <div id="BtnLog_ht">
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
        </button>

        {/* boton de regreso */}
        <BotonBack />

        <div id="Perfil_ht">
          <span>Perfil</span>
        </div>

        <form onSubmit={handleSubmit}>
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

          <div id="Grupo_853">
            <div id="Nombre_hn">
              <span>Nombre:</span>
            </div>
          </div>

          {/* input apellido */}
          <div id="Grupo_870">
            <div id="Apellido_hn">
              <span>Apellido:</span>
            </div>
          </div>

          <div id="Grupo_925">
            <input
              type="text"
              className="Input_Apellido_Perf"
              id="Input_Apellido_Perf"
              value={user.Input_Apellido}
              onChange={handleChange}
              readOnly="readOnly"
            />
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

          {/* input peso */}
          <div id="Peso">
            <span>Peso:</span>
          </div>

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
          <div id="Altura">
            <span>Altura:</span>
          </div>
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
          <button>
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
          </button>
        </form>
      </div>
    </div>
  );
}

export default PerfilBody;
