import React from "react";
import BotonBack from "./BotonBack";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../components/Firebase";
import { useUser } from "./UserContext";
import { isEmpty } from "lodash";

const today = new Date();
const fechas = [
  {
    value:
      today.getFullYear() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate(),
    label:
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear(),
  },
];

const horas = [
  { value: "06:00:00", label: "6:00" },
  { value: "07:00:00", label: "7:00" },
  { value: "08:00:00", label: "8:00" },
  { value: "09:00:00", label: "9:00" },
  { value: "16:00:00", label: "16:00" },
  { value: "17:00:00", label: "17:00" },
  { value: "18:00:00", label: "18:00" },
  { value: "19:00:00", label: "19:00" },
  { value: "20:00:00", label: "20:00" },
  { value: "21:00:00", label: "21:00" },
];

const datosReserva = {
  fecha: fechas[0].value,
  hora: horas[0].value,
};

// main function
function ReservasBody() {
  const [reserva, setReserva] = useState(datosReserva);
  const [loading, setLoading] = useState(true);
  const [consulta, setConsulta] = useState([]);
  const [participantes, setParticipantes] = useState([]);
  const { usuarioLoged } = useUser();

  function handleChange(e) {
    e.persist(); //persiste el evento
    setReserva((curReserva) => {
      return {
        ...curReserva,
        [e.target.id]: e.target.value,
      };
    });
  }

  const getEventos = async () => {
    setLoading(true);
    const date = new Date(reserva.fecha + " " + reserva.hora);
    const date1 = Timestamp.fromDate(date);

    const date2 = Timestamp.fromDate(
      new Date(date.setHours(date.getHours() + 1))
    );

    const queryRef = collection(db, "clases");
    const q = query(
      queryRef,
      where("fecha", ">", date1),
      where("fecha", "<", date2)
    );

    const querySnapshot = await getDocs(q);
    const docs = [];
    const nombres = [];

    querySnapshot.forEach((docu) => {
      docu.data().participantes.forEach(async (mail) => {
        const docRef = doc(db, "usuarios", mail);
        const querySnapshot = await getDoc(docRef);

        if (querySnapshot.exists()) {
          nombres.push({ ...querySnapshot.data(), id: mail });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

        // console.log(nombres);
      });
      docs.push({ ...docu.data(), id: docu.id });
    });

    console.log(nombres.pop());
    setConsulta(docs[0]);

    setLoading(false);
  };

  const getUsuarios = async () => {
    const nombres = [];
    if (!isEmpty(consulta)) {
      consulta.participantes.forEach(async (mail) => {
        const docRef = doc(db, "usuarios", mail);

        const querySnapshot = await getDoc(docRef);

        // consulta
        if (querySnapshot.exists()) {
          nombres.push({ ...querySnapshot.data(), id: mail });
          setParticipantes(nombres);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    }
  };

  useEffect(() => {
    // getUsuarios();
  }, [consulta]);
  //consulta cuando cambie la fecha o la hora
  useEffect(() => {
    getEventos();
    // return () => {};
  }, [reserva]);
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
        <BotonBack />
        {/* rutinas */}
        {/* <div className="formRutinas_Class">
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
            {/* <div className="n_0_Abdominales_50_Sentadillas_Class">
              {consulta != null && consulta.rutina ? (
                consulta.rutina.split(",").map((e) => {
                  return (
                    <>
                      <span>{e}</span>
                      <br />
                    </>
                  );
                })
              ) : (
                <span>No se encontro rutinas</span>
              )}
            </div>
          </div>
        </div>  */}
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
                {fechas.map((e) => {
                  return (
                    <option value={e.value} key={e.value}>
                      {e.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        {/* boton reserva */}
        {consulta != null &&
        consulta.participantes &&
        consulta.participantes.indexOf(usuarioLoged.email) === -1 ? (
          <button
            onClick={async () => {
              if (consulta.participantes.indexOf(usuarioLoged.email) === -1) {
                const nuevoParticipantes = consulta.participantes;
                nuevoParticipantes.push(usuarioLoged.email);

                const claseRef = doc(db, "clases", consulta.id);
                await updateDoc(claseRef, {
                  participantes: nuevoParticipantes,
                });
              }
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
        ) : (
          <div className="lblReserva">
            <span>Ya se encuentra registrado</span>
          </div>
        )}
        {/* participantes */}

        <div className="formParticipantes_Class">
          <svg className="CuadroParticipantes" viewBox="0 0 352 272.333">
            <path
              className="Trazado_39_Class" 
              d="M 32.74418640136719 0 L 319.2558288574219 0 C 337.3399353027344 0 352 17.81593322753906 352 39.79300308227539 L 352 232.5403594970703 C 352 254.5174255371094 337.3399353027344 272.3333740234375 319.2558288574219 272.3333740234375 L 32.74418640136719 272.3333740234375 C 14.66007041931152 272.3333740234375 0 254.5174255371094 0 232.5403594970703 L 0 39.79300308227539 C 0 17.81593322753906 14.66007041931152 0 32.74418640136719 0 Z"
            ></path>
          </svg>
        </div>
        <div className="lblParticipantes_Class">
          <span>Participantes:</span>
        </div>
        <div className="CajaContenidos">
          {!isEmpty(participantes) ? (
            participantes.map((e) => {
              return (
                <>
                  <div className="participante">
                    <img
                      className="FotoPP"
                      src="/images/Reservas/n_838764.png"
                      alt="foto de perfil"
                    />
                    <div className="nomPart">
                      <span>{e.nombre + " " + e.apellido}</span>
                    </div>
                    {e.id === usuarioLoged.email ? (
                      // boton eliminar
                      <button
                        onClick={async () => {
                          const nuevoParticipantes =
                            consulta.participantes.filter(
                              (item) => item !== usuarioLoged.email
                            );
                          const claseRef = doc(db, "clases", consulta.id);
                          await updateDoc(claseRef, {
                            participantes: nuevoParticipantes,
                          });
                        }}
                      >
                        <div className="btnEliminar_Class btn">
                          <svg className="Trazado_50" viewBox="0 0 215 95 ">
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
                    ) : (
                      <></>
                    )}
                  </div>
                  <br />
                </>
              );
            })
          ) : (
            <div className="nomPart">
              <span>No existen participantes</span>
            </div>
          )}
        </div>

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
                {horas.map((e) => {
                  return (
                    <option value={e.value} key={e.value}>
                      {e.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservasBody;
