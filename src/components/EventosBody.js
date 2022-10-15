import React from "react";

function EventosBody() {
    return (
        <div>

            <div id="Reserva" className="Reserva_Class">
                <svg className="imgFondo">
                    <rect className="imgFondo_Class" rx="0" ry="0" x="0" y="0" width="445" height="926">
                    </rect>
                </svg>
                <div className="lblReserva_Class">
                    <span>Eventos</span>
                </div>

                <svg className="btnBack btn" viewBox="0 0 24 29">
                    <path className="btnBack_Class" d="M 12 0 L 24 29 L 0 29 Z">
                    </path>
                </svg>

                <div className="formFecha_Class">
                    <div className="Grupo_819_Class">
                        <svg className="Rectngulo_101_">
                            <rect className="Rectngulo_101__Class" rx="9" ry="9" x="0" y="0" width="240" height="45">
                            </rect>
                        </svg>
                        <div className="Fecha__Class">
                            <span>Fecha:</span>
                            <span>15/9/2022</span>
                        </div>
                    </div>

                    <div className="Grupo_820_Class">
                        <svg className="Rectngulo_101_">
                            <rect className="Rectngulo_101__Class" rx="9" ry="9" x="0" y="0" width="346" height="550">
                            </rect>
                        </svg>
                        <div className="imagen_cont">
                            <img className="evento_class" src="images/Eventos/Yoga1.png" />
                        </div>

                        <div className="Contenido">
                            <span>Clase de yoga</span>
                            <br />
                            <span>Precio:</span>
                            <span style={{"fontStyle":"normal","color":"rgba(236,66,36,1)"}}>Gratis</span>
                            <br />
                            <span >Profesora:</span>
                            <span style={{"fontStyle}":"{normal}","{color}":"{rgba(236,66,36,1)"}}>Carla</span>
                            <br />
                            <span >Hora:</span>
                            <span style={{"fontStyle":"normal","color":"rgba(236,66,36,1)"}}>7:00 a.m</span>
                        </div>
                    </div>
                </div>

                <div className="barraNave_Class">
                    <svg className="Trazado_52" viewBox="0 0 428 62">
                        <path className="Trazado_52_Class" d="M 0 0 L 428 0 L 428 62 L 0 62 L 0 0 Z">
                        </path>
                    </svg>
                    <img className="n_838764_bv_Class btn" src="images/Eventos/n_838764_bv.png" />

                    <img className="calendar_Class btn" src="images/Eventos/calendar.png" />

                    <img className="home_Class btn" src="images/Eventos/home.png" />

                </div>
            </div>
        </div>
    )
}

export default EventosBody; 