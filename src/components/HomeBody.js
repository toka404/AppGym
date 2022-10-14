import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeBody() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("Usuario");

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
        <span>Hola {usuario}</span>
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
      <div id="Grupo_865">
        <svg className="Trazado_52_cz" viewBox="0 0 428 62">
          <path
            id="Trazado_52_cz"
            d="M 0 0 L 428 0 L 428 62 L 0 62 L 0 0 Z"
          ></path>
        </svg>

        <img
          id="n_838764_c"
          src="/images/Home/n_838764_c.png"
          className="btn"
        />

        <img
          id="calendar_c"
          src="/images/Home/calendar_c.png"
          className="btn"
        />

        <img id="home_c" src="/images/Home/home_c.png" className="btn" />
      </div>
    </div>
  );
}
export default HomeBody;