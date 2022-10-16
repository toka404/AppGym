import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../components/Firebase";

function useConsulta(colleccion, documento) {
  const [eventoDoc, setEventoDoc] = useState([]);

  const getEventos = async () => {
    const docRef = doc(db, colleccion, documento);
    const querySnapshot = await getDoc(docRef);

    if (querySnapshot.exists()) {
      setEventoDoc(querySnapshot.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    getEventos();
  }, [colleccion]);
  return [eventoDoc];
}

export default useConsulta;
