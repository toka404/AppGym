import React from "react";
import { useNavigate } from "react-router-dom";

function ReservasBody() {
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
          <span>Reserva</span>
        </div>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          <svg className="btnBack btn" viewBox="0 0 24 29">
            <path className="btnBack_Class" d="M 12 0 L 24 29 L 0 29 Z"></path>
          </svg>
        </button>
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
        <div className="formFecha_Class">
          <div className="Grupo_818_Class">
            <svg className="Rectngulo_101">
              <rect
                className="Rectngulo_101_Class"
                rx="9"
                ry="9"
                x="0"
                y="0"
                width="346"
                height="43"
              ></rect>
            </svg>
            <div className="Fecha_Class">
              <span>Fecha:</span>
            </div>
            <div className="n_592022_Class">
              <span>15/9/2022</span>
            </div>
          </div>
          <div className="Grupo_819_Class">
            <svg className="Rectngulo_101_">
              <rect
                className="Rectngulo_101__Class"
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
            <div className="n_592022__Class">
              <select >
                <option value="Dia" >15/9/2022</option>
                <option value="Dia1">16/9/2022</option>
                <option value="Dia2">17/9/2022</option>
              </select>
            </div>
          </div>
        </div>
        <div className="btnReservar_Class btn">
          <svg className="Trazado_40" viewBox="0 0 225 60">
            <path
              className="Trazado_40_Class"
              d="M 18 0 L 171 0 C 180.9411315917969 0 189 8.058874130249023 189 18 L 189 36 C 189 45.94112396240234 180.9411315917969 54 171 54 L 18 54 C 8.058874130249023 54 0 45.94112396240234 0 36 L 0 18 C 0 8.058874130249023 8.058874130249023 0 18 0 Z"
            ></path>
          </svg>
          <div className="Reservar_Class">
            <span>Reservar</span>
          </div>
        </div>
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
        <img className="n_838764_Class" src="/images/Reservas/n_838764.png" />

        <div className="Emy_Class">
          <span>Emy</span>
        </div>

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
        <div className="formHora_Class">
          <div className="Grupo_818_bl_Class">
            <svg className="Rectngulo_101_bm">
              <rect
                className="Rectngulo_101_bm_Class"
                rx="9"
                ry="9"
                x="0"
                y="0"
                width="346"
                height="43"
              ></rect>
            </svg>
            <div className="Fecha_bn_Class">
              <span>Fecha:</span>
            </div>
            <div className="lblFecha">
              <span>15/9/2022</span>
            </div>
          </div>
          nBack
          <div className="Grupo_819_bp_Class">
            <svg className="Rectngulo_101_bq">
              <rect
                className="Rectngulo_101_bq_Class"
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
              <select>
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
        <div className="barraNave_Class">
          <svg className="Trazado_52" viewBox="0 0 428 62">
            <path
              className="Trazado_52_Class"
              d="M 0 0 L 428 0 L 428 62 L 0 62 L 0 0 Z"
            ></path>
          </svg>
          <img
            className="n_838764_bv_Class btn"
            src="/images/Reservas/n_838764_bv.png"
          />

          <img
            className="calendar_Class btn"
            src="/images/Reservas/calendar.png"
          />

          <img className="home_Class btn" src="/images/Reservas/home.png" />
        </div>
      </div>
    </div>
  );
}

export default ReservasBody;
