import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfWeek,
} from "date-fns";
import es from "date-fns/locale/es";
import { useState, useEffect } from "react";
import BotonBack from "./BotonBack";
import { useUser } from "./UserContext";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "./Firebase";
import { endOfWeek, subWeeks } from "date-fns/esm";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CalendCom() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let [meetings, setConsulta] = useState([]);
  const [loading, setLoading] = useState(true);
  const { usuarioLoged } = useUser();

  //metodo para la consulta
  const getEventos = async () => {
    setLoading(true);
    const queryRef = collection(db, "comida");
    const q = query(
      queryRef,
      where("fecha", ">", Timestamp.fromDate(new Date(today.toISOString())))
    );
    const querySnapshot = await getDocs(q);
    const docs = [];
    setLoading(false);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc });
    });
    setConsulta(docs);
  };

  useEffect(() => {
    getEventos();
  }, []);

  // Se cambia para los dias exclusivos de la semana
  let days = eachDayOfInterval({
    start: startOfWeek(today, { weekStartsOn: 1 }),
    end: endOfWeek(today, { weekStartsOn: 1 }),
  });

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.fecha.toDate().toISOString()), selectedDay)
  );

  return (
    // div que controla todo
    <div className="pt-40 bg-pes ">
      <BotonBack />

      <div className="lblCalendarioAl_Class">
        <span>Plan Alimenticio</span>
      </div>

      <div className="max-w-4xl px-8 mx-auto sm:px-4 md:max-w-lg md:px-6 ">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 border-zinc-50">
          {/*Menu completo */}
          <div className="md:pr-14 bg-fondo rounded-md">
            <div className="flex items-center">
              {/* Mes */}
              <h2 className="flex-auto font-semibold text-blanco text-xl ">
                {format(firstDayCurrentMonth, "MMMM yyyy", { locale: es })}
              </h2>
            </div>
            {/* Para los d??as de la semana */}
            <div className="grid grid-cols-7 mt-10 text-xl leading-6 text-center text-blanco">
              <div>D</div>
              <div>L</div>
              <div>M</div>
              <div>X</div>
              <div>J</div>
              <div>V</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-xl">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  {/* Para los d??as en n??meros realiza una consulta */}
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-blanco",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-blanco",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-naranja",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-naranja",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time
                      dateTime={format(day, "yyyy-MMMM-dd", { locale: es })}
                    >
                      {format(day, "d")}
                    </time>
                  </button>
                  {/* Puntos debajo de cada fecha */}
                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(
                        parseISO(meeting.fecha.toDate().toISOString()),
                        day
                      )
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-naranja"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-8 md:mt-0 md:pl-14">
            <h2 className="font-medium font-poppins text-left text-blanco text-lg">
              {/* Fecha del calendario */}{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>
            <div className="scrollCalendario2">
              <ol className="mt-4 space-y-1 text-lg leading-6 text-gray-500">
                {selectedDayMeetings.length > 0 ? (
                  selectedDayMeetings.map((meeting) => (
                    <Meeting meeting={meeting} key={meeting.id.id} />
                  ))
                ) : (
                  <p className="text-blanco font-medium font-poppins text-center">
                    No hay plan para hoy
                  </p>
                )}
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
// Funcion para las comidas
function Meeting({ meeting }) {
  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <div className="flex-auto">
        {/* Como se llama la comida (si desayuno) */}
        <p className="text-naranja font-medium font-poppins text-left">
          {meeting.name}
        </p>
        {/* Lo que va a comer*/}
        <p className="text-blanco font-medium font-poppins text-left">
          *{meeting.descripcion}
        </p>
      </div>
    </li>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default CalendCom;
