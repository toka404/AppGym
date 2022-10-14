import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div id="Grupo_865">
      <svg className="Trazado_52_cz" viewBox="0 0 428 62">
        <path
          id="Trazado_52_cz"
          d="M 0 0 L 428 0 L 428 62 L 0 62 L 0 0 Z"
        ></path>
      </svg>

      <button
        onClick={() => {
          navigate("/perfil");
        }}
      >
        <img
          id="n_838764_c"
          src="/images/Home/n_838764_c.png"
          className="btn"
        />
      </button>

      <button
        onClick={() => {
          navigate("/calendario");
        }}
      >
        <img
          id="calendar_c"
          src="/images/Home/calendar_c.png"
          className="btn"
        />
      </button>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <img id="home_c" src="/images/Home/home_c.png" className="btn" />
      </button>
    </div>
  );
}

export default Footer;
