import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//se declara afuera para no recrearlo en cada render
const emptyLogin = {
  Input_correo: "",
  Input_Contra: "",
};

function Body() {
  const [login, setLogin] = useState(emptyLogin);
  const navigate = useNavigate();

  function handleChange(e) {
    e.persist(); //persiste el evento
    setLogin((curLogin) => {
      return {
        ...curLogin,
        [e.target.id]: e.target.value,
      };
    });
  }

  return (
    <div>
      <div id="Usuario">
        <svg className="img_fondo">
          <rect
            id="img_fondo"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="431"
            height="926"
          ></rect>
        </svg>
        <div id="input_correo">
          <input
            className="Input_correo"
            id="Input_correo"
            type="email"
            value={login.email}
            onChange={handleChange}
          />
          <svg className="Lnea_4" viewBox="0 0 314 5">
            <path id="Lnea_4" d="M 0 0 L 314 0"></path>
          </svg>
        </div>

        <div id="lbl_correo">
          <p>
            <span>Correos/Email:</span>
          </p>
        </div>

        <div id="btn_ingresar">
          <button
            id="BtnIngreso"
            className="BtnIngreso"
            onClick={() => {
              signInWithEmailAndPassword(
                auth,
                login.Input_correo,
                login.Input_Contra
              )
                .then((userCredential) => {
                  // Signed in
                  // const user = userCredential.user;
                  navigate("home");
                  // ...
                })
                .catch((error) => {
                  // const errorCode = error.code;
                  // const errorMessage = error.message;
                  console.log("Usuario o Contraseña incorrecto");
                });
            }}
          >
            Ingresar
          </button>
        </div>

        <div id="lbl_registrate">
          <p>
            <span>¿No tienes una cuenta? </span>
            <Link
              to="/registro"
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                color: "rgba(236,66,36,1)",
              }}
            >
              ¡Registrate!
            </Link>
            <span
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                color: "rgba(210,42,13,1)",
              }}
            >
              {" "}
            </span>
          </p>
        </div>
        <div id="lbl_broken_hand">
          <p>
            <span>BROKEN HAND</span>
          </p>
        </div>
        <div id="lbl_contrasena">
          <p>
            <span>Contraseña:</span>
          </p>
        </div>
        <img id="img_cuerda" src="images/img_cuerda.png" />

        <div id="img_contrasea">
          <input
            className="Input_Contra"
            id="Input_Contra"
            type={"password"}
            value={login.password}
            onChange={handleChange}
          />
          <svg className="Lnea_4" viewBox="0 0 314 5">
            <path id="Lnea_4" d="M 0 0 L 314 0"></path>
          </svg>
        </div>

        <div id="btn_google">
          <div id="Grupo_903">
            <button
              id="Btn_google"
              className="Btn_google"
              onClick={() => {
                signInWithPopup(auth, provider)
                  .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential =
                      GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    navigate("home");
                    // ...
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential =
                      GoogleAuthProvider.credentialFromError(error);
                    // ...
                  });
              }}
            >
              Ingresar
            </button>
            <img id="google_1" src="images/google_1.png" />
          </div>
        </div>

        <div id="btn_facebook">
          <div id="Grupo_904">
            <button id="BtnFacebook" className="BtnFacebook">
              Ingresar
            </button>
            <img id="facebook" src="images/facebook.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
