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

const emptyUsuario = null;

const UserContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [usuarioLoged, setUsuarioLoged] = useState(emptyUsuario);

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

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsuarioLoged(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ signup, loginContext, update, logOut, usuarioLoged }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
