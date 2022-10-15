import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

function HomeBody() {
  const navigate = useNavigate();
  const { usuarioLoged } = useUser();

  return (
    <div>
      <div id="Home" />
      <svg className="Rectngulo_103_ck">
        <rect
          id="Rectngulo_103_ck"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="428"
          height="926"
        ></rect>
      </svg>
      <div id="Hola_Usuario">
        <span>Hola {usuarioLoged.displayName}</span>
      </div>
      <button
        onClick={() => {
          navigate("/reservas");
        }}
      >
        <div id="Grupo_866" className="btn">
          <img
            id="ambitious-creative-co-rick-bar"
            src={"/images/Home/pesas.png"}
          />
          <div id="Grupo_de_desplazamiento_1">
            <div id="Reservas">
              <span>Reservas</span>
            </div>
          </div>
        </div>
      </button>

      <button
        onClick={() => {
          navigate("/comidas");
        }}
      >
        <div id="Grupo_868" className="btn">
          <img id="img_fruta" src="/images/Home/comida.png" />
          <div id="Grupo_de_desplazamiento_3">
            <div id="Comidas">
              <span>Comidas</span>
            </div>
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/eventos");
        }}
      >
        <div id="Grupo_867" className="btn">
          <img id="img_ejercicio" src="/images/Home/yoga.png" />
          <div id="Grupo_de_desplazamiento_2">
            <div id="Eventos_cx">
              <span>Eventos</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
export default HomeBody;
