import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/Firebase";

function useConsulta(colleccion) {
  const [eventoDoc, setEventoDoc] = useState([]);

  const getEventos = async () => {
    const querySnapshot = await getDocs(collection(db, colleccion));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc });
    });
    setEventoDoc(docs);
  };
  useEffect(() => {
    getEventos();
  }, [colleccion]);
  return [eventoDoc];
}

export default useConsulta;
