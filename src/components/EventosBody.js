import React from "react";
import Evento from "./Evento";
import BotonBack from "./BotonBack";
import useColeccion from "../Hooks/useColeccion";

function EventosBody() {
  const [eventoDoc] = useColeccion("Eventos");
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
        <BotonBack />
        {/* titulo de la pagina */}
        <div className="lblReserva_Class">
          <span>Eventos</span>
        </div>
        {/* Eventos */}
        <div className="ScrollSpace">
          {eventoDoc.map((evento) => {
            return (
              <>
                <Evento datos={evento} key={evento.id.id} />;
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventosBody;
