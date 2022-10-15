import React from "react";
import { useNavigate } from "react-router-dom";

function EventosBody() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="Reserva" className="Reserva_Class">
        <svg className="imgFondo">
          <rect
            className="imgFondo_Class"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="445"
            height="926"
          ></rect>
        </svg>
        <div className="lblReserva_Class">
          <span>Eventos</span>
        </div>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <svg className="btnBack btn" viewBox="0 0 24 29">
            <path className="btnBack_Class" d="M 12 0 L 24 29 L 0 29 Z"></path>
          </svg>
        </button>
        <div className="formFecha_Class">
          <div className="Grupo_820_Class">
            <svg className="Rectngulo_101_">
              <rect
                className="Rectngulo_101__Class"
                rx="9"
                ry="9"
                x="0"
                y="0"
                width="346"
                height="620"
              ></rect>
            </svg>

            <div className="NameYoga__ClassEventos">
              <span>Yoga con Carla</span>
            </div>
            <div className="Fecha__ClassEventos">
              <span>Fecha:</span>
              <span>15/9/2022</span>
            </div>
            <div className="imagen_cont">
              <img className="evento_class" src="images/Eventos/Yoga1.png" />
            </div>

            <div className="Contenido">
              <span>Clase de yoga</span>
              <br />
              <span>Precio:</span>
              <span style={{ fontStyle: "normal", color: "rgba(236,66,36,1)" }}>
                Gratis
              </span>
              <br />
              <span>Profesora:</span>
              <span
                style={{
                  "fontStyle}": "{normal}",
                  "{color}": "{rgba(236,66,36,1)",
                }}
              >
                Carla
              </span>
              <br />
              <span>Hora:</span>
              <span style={{ fontStyle: "normal", color: "rgba(236,66,36,1)" }}>
                7:00 a.m
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventosBody;
