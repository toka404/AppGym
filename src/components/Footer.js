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
        {/*         <img
          id="n_838764_c"
          src="/images/Home/n_838764_c.png"
          alt="icono imagen perfil"
          className="btn"
        /> */}

        <svg
          id="n_838764_c"
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
      </button>

      <button
        onClick={() => {
          navigate("/calendario");
        }}
      >
        <img
          id="calendar_c"
          src="/images/Home/calendar_c.png"
          alt="icono calendario"
          className="btn"
        />
      </button>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          id="home_c"
          src="/images/Home/home_c.png"
          className="btn"
          alt="icono home"
        />
      </button>
    </div>
  );
}

export default Footer;
