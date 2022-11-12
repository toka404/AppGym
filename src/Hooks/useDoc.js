import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../components/Firebase";

export async function crearDocumento(coleccion, documento, datos) {
  await setDoc(doc(db, coleccion, documento), datos);
}
export async function updateDocumento(coleccion, documento, datos) {
  await updateDoc(doc(db, coleccion, documento), datos);
}

function useConsulta(colleccion, documento) {
  const [eventoDoc, setEventoDoc] = useState(null);

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
