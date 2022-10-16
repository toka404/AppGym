import React from "react";
import { useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
import { db } from "../components/Firebase";
import { doc, getDoc } from "firebase/firestore";

const emptyUsuario = null;
const emptyInformacion = {};

const UserContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [usuarioLoged, setUsuarioLoged] = useState(emptyUsuario);
  const [informacion, setInformacion] = useState(emptyInformacion);

  async function getEventos(mail) {
    const docRef = doc(db, "usuarios", mail);
    const querySnapshot = await getDoc(docRef);

    if (querySnapshot.exists()) {
      // console.log("entro");
      setInformacion(querySnapshot.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const update = async (nombre) => {
    await updateProfile(auth.currentUser, {
      displayName: nombre,
    });
  };

  const loginContext = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth);
    window.location.reload(true);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsuarioLoged(currentUser);
      if (currentUser != null) {
        getEventos(currentUser.email);
      }
    });

    return () => unsubscribe();
  }, [usuarioLoged]);

  return (
    <UserContext.Provider
      value={{
        signup,
        loginContext,
        update,
        logOut,
        usuarioLoged,
        informacion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
