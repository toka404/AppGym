import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAkyN4MoGxrjlbQfh2z8S-DBeZPLlLzd8M",
  authDomain: "app-gym-f3cf3.firebaseapp.com",
  databaseURL: "https://app-gym-f3cf3-default-rtdb.firebaseio.com",
  projectId: "app-gym-f3cf3",
  storageBucket: "app-gym-f3cf3.appspot.com",
  messagingSenderId: "1080211709746",
  appId: "1:1080211709746:web:8bd680f3edcc8c7f1bc12b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// referencia
export async function useConsulta() {
  const docRef = doc(db, "Eventos", "4GxmPNwKrNDBPiwzx9Xu");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
