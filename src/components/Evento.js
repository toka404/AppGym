import React from "react";
import { useNavigate } from "react-router-dom";

function Evento(datos) {
  const navigate = useNavigate();
  const informacion = datos.datos;

  let time = informacion.fecha;

  const fireBaseTime = new Date(
    time.seconds * 1000 + time.nanoseconds / 1000000
  );

  return (
    <div className="CuadroEvento">
      <button
        onClick={() => {
          // console.log(informacion);
          navigate("/reservae", {
            state: {
              id: informacion.id.id,
            },
          });
        }}
      >
        <svg className="Rectngulo_101_">
          <rect
            className="Rectngulo_101__Class"
            rx="9"
            ry="9"
            x="0"
            y="0"
            z="0"
            width="346"
            height="620"
          ></rect>
        </svg>

        {/* titulo del evento */}
        <div className="NameYoga__ClassEventos">
          <span>{informacion.titulo}</span>
        </div>

        {/* Fecha del evento */}
        <div className="Fecha__ClassEventos">
          <span>Fecha:</span>
          <span> {fireBaseTime.toDateString()}</span>
        </div>

        {/* imagen del evento */}
        <div className="imagen_cont">
          <img
            className="evento_class"
            src="images/Eventos/Yoga1.png"
            alt="imagen yoga"
          />
        </div>

        {/* descripcion de la informacion */}
        <div className="Contenido">
          <span>{informacion.descripcion}</span>
          <br />
 
          {/* informacion precio */}
          {/* <span>Precio:</span> */}
          {/* <span style={{ fontStyle: "normal", color: "rgba(236,66,36,1)" }}> */}
            {/* {" "} */}
            {/* {informacion.precio} */}
          {/* </span> */}

          {/* informacion profesor */}
          <span>Profesora:</span>
          <span
            style={{
              "fontStyle}": "{normal}",
              "{color}": "{rgba(236,66,36,1)",
            }}
          >
            {" "}
            {informacion.profesor}
          </span>
          <br />

          {/* informacion Hora */}
          <span>Hora:</span>
          <span style={{ fontStyle: "normal", color: "rgba(236,66,36,1)" }}>
            {" "}
            {fireBaseTime.toLocaleTimeString()}
          </span>
        </div>
        <br />
      </button>
    </div>
  );
}

export default Evento;
