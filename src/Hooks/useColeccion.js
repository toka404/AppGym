import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../components/Firebase";

export function useQuery(coleccion, campo, comparador, busqueda) {
  const [eventoDoc, setEventoDoc] = useState([]);

  const getEventos = async () => {
    const queryRef = collection(db, "clases");
    const q = query(
      queryRef,
      where("participantes", "array-contains", "bryancito@hotmail.com")
    );

    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
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
