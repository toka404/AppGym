import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "../components/Firebase";

export function useQueryReservas(coleccion, usuario) {
  const [eventoDoc, setEventoDoc] = useState([]);

  const getEventos = async () => {
    const queryRef = collection(db, "clases");

    const q = query(queryRef, where("participantes", "!=", usuario));

    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      docs.push({ ...doc.data(), id: doc });
    });
    setEventoDoc(docs);
  };
  useEffect(() => {
    getEventos();
  }, [coleccion]);
  return [eventoDoc];
}

export function useQuery(coleccion) {
  const [eventoDoc, setEventoDoc] = useState([]);

  const date1 = Timestamp.fromDate(new Date("2022-10-18 07:00:00"));
  const date2 = Timestamp.fromDate(new Date("2022-10-18 09:00:00"));
  console.log(date1);
  const getEventos = async () => {
    const queryRef = collection(db, "clases");
    const q = query(
      queryRef,
      where("fecha", ">", date1),
      where("fecha", "<", date2)
    );

    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      docs.push({ ...doc.data(), id: doc });
    });
    setEventoDoc(docs);
  };
  useEffect(() => {
    getEventos();
  }, [coleccion]);
  return [eventoDoc];
}

function useConsulta(coleccion) {
  const [eventoDoc, setEventoDoc] = useState([]);

  const getEventos = async () => {
    const querySnapshot = await getDocs(collection(db, coleccion));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc });
    });
    setEventoDoc(docs);
  };
  useEffect(() => {
    getEventos();
  }, [coleccion]);
  return [eventoDoc];
}

export default useConsulta;
