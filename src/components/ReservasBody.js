import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const datosReserva = {
  fecha: "",
  hora: "",
};

function ReservasBody() {
  const [reserva, setReserva] = useState(datosReserva);
  const navigate = useNavigate();

  function handleChange(e) {
    e.persist(); //persiste el evento
    setReserva((curReserva) => {
      return {
        ...curReserva,
        [e.target.id]: e.target.value,
      };
    });
  }

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
          <span>Reserva</span>
        </div>
        {/* boton regreso */}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <svg className="btnBack btn" viewBox="0 0 24 29">
            <path className="btnBack_Class" d="M 12 0 L 24 29 L 0 29 Z"></path>
          </svg>
        </button>
        {/* rutinas */}
        <div className="formRutinas_Class">
          <svg className="Rectngulo_386">
            <rect
              className="Rectngulo_386_Class"
              rx="25"
              ry="25"
              x="0"
              y="0"
              width="355"
              height="188"
            ></rect>
          </svg>
          <div className="Grupo_115_Class">
            <div className="Rutinas_Class">
              <span>Rutinas:</span>
            </div>
            {/* Informacion de las rutinas */}
            <div className="n_0_Abdominales_50_Sentadillas_Class">
              <span>10 Abdominales</span>
              <br />
              <span>50 Sentadillas</span>
              <br />
              <span>5 Muscle up</span>
              <br />
              <span>8 Flexiones</span>
            </div>
          </div>
        </div>
        {/* Fecha */}
        <div className="formFecha_Class">
          <div className="Grupo_819_ClassReserva">
            <svg className="Rectngulo_101_Reserva">
              <rect
                className="Rectngulo_101__ClassReserva"
                rx="9"
                ry="9"
                x="0"
                y="0"
                width="346"
                height="43"
              ></rect>
            </svg>
            <div className="Fecha__Class">
              <span>Fecha:</span>
            </div>
            {/* select para fechas */}
            <div className="n_592022__Class">
              <select value={reserva.fecha} onChange={handleChange} id="fecha">
                <option value="Dia1">15/9/2022</option>
                <option value="Dia2">16/9/2022</option>
                <option value="Dia3">17/9/2022</option>
              </select>
            </div>
          </div>
        </div>
        {/* boton reserva */}
        <button
          onClick={() => {
            console.log("Reservado " + reserva.fecha + ";" + reserva.hora);
          }}
        >
          <div className="btnReservar_ClassReserva btn">
            <svg className="Trazado_40" viewBox="0 0 225 60">
              <path
                className="Trazado_40_Class"
                d="M 18 0 L 171 0 C 180.9411315917969 0 189 8.058874130249023 189 18 L 189 36 C 189 45.94112396240234 180.9411315917969 54 171 54 L 18 54 C 8.058874130249023 54 0 45.94112396240234 0 36 L 0 18 C 0 8.058874130249023 8.058874130249023 0 18 0 Z"
              ></path>
            </svg>
            <div className="Reservar_ClassReserva">
              <span>Reservar</span>
            </div>
          </div>
        </button>
        <div className="formParticipantes_Class">
          <svg className="Trazado_39" viewBox="0 0 352 272.333">
            <path
              className="Trazado_39_Class"
              d="M 32.74418640136719 0 L 319.2558288574219 0 C 337.3399353027344 0 352 17.81593322753906 352 39.79300308227539 L 352 232.5403594970703 C 352 254.5174255371094 337.3399353027344 272.3333740234375 319.2558288574219 272.3333740234375 L 32.74418640136719 272.3333740234375 C 14.66007041931152 272.3333740234375 0 254.5174255371094 0 232.5403594970703 L 0 39.79300308227539 C 0 17.81593322753906 14.66007041931152 0 32.74418640136719 0 Z"
            ></path>
          </svg>
        </div>
        <div className="lblParticipantes_Class">
          <span>Participantes:</span>
        </div>
        {/* participantes */}
        <img className="n_838764_Class" src="/images/Reservas/n_838764.png" />
        <div className="Emy_Class">
          <span>Emy</span>
        </div>
        {/* Boton eliminar */}
        <button
          onClick={() => {
            console.log("Se elimino el registro");
          }}
        >
          <div className="btnEliminar_Class btn">
            <svg className="Trazado_50" viewBox="0 0 170 75">
              <path
                className="Trazado_50_Class"
                d="M 14.19047546386719 0 L 134.8095245361328 0 C 142.6467132568359 0 149 8.058874130249023 149 18 L 149 36 C 149 45.94112396240234 142.6467132568359 54 134.8095245361328 54 L 14.19047546386719 54 C 6.353291988372803 54 0 45.94112396240234 0 36 L 0 18 C 0 8.058874130249023 6.353291988372803 0 14.19047546386719 0 Z"
              ></path>
            </svg>
            <div className="Eliminar_Class">
              <span>Eliminar</span>
            </div>
          </div>
        </button>
        {/* Se debe agregar el resto de participantes */}

        {/* Seleccion hora */}
        <div className="formHora_Class">
          <div className="Grupo_819_bp_ClassReserva">
            <svg className="Rectngulo_101_bqReserva">
              <rect
                className="Rectngulo_101_bq_ClassReserva"
                rx="9"
                ry="9"
                x="0"
                y="0"
                width="346"
                height="43"
              ></rect>
            </svg>
            <div className="Hora_Class">
              <span>Hora:</span>
            </div>
            <div className="lblHora">
              <select id="hora" value={reserva.hora} onChange={handleChange}>
                <option value="Manana7">7:00</option>
                <option value="Manan8">8:00</option>
                <option value="Manan9">9:00</option>
                <option value="Manan10">10:00</option>
                <option value="Tarde16">16:00</option>
                <option value="Tarde17">17:00</option>
                <option value="Tarde18">18:00</option>
                <option value="Tarde19">19:00</option>
                <option value="Tarde20">20:00</option>
                <option value="Tarde21">21:00</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservasBody;
