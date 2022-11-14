import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/UserContext";
import { Link } from "react-router-dom";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { Container, Form, Button } from "semantic-ui-react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { crearDocumento } from "../Hooks/useDoc";
import { db } from "../components/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Modal from "../components/Modal";
import styled from "styled-components";

//se declara afuera para no recrearlo en cada render
const emptyLogin = {
  Input_correo: "",
  Input_Contra: "",
};

function Body() {
  const [login, setLogin] = useState(emptyLogin);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const { loginContext } = useUser();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  function handleChange(e) {
    e.persist(); //persiste el evento
    setLogin((curLogin) => {
      return {
        ...curLogin,
        [e.target.id]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await loginContext(login.Input_correo, login.Input_Contra);
      navigate("/");
    } catch (error) {
      cambiarEstadoModal(!estadoModal);
    }
  }

  async function crearCuenta(user) {
    const auxNombre = user.displayName.split(" ");
    const docRef = doc(db, "usuarios", user.email);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      try {
        await crearDocumento("usuarios", user.email, {
          nombre: auxNombre[0],
          apellido: auxNombre[1],
          peso: "",
          altura: "",
        });
        navigate("/");
      } catch (error) {
        console.log("a");
      }
    }
  }

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      <div id="Usuario">
        <svg className="img_fondo">
          <rect id="img_fondo" width="431" height="898"></rect>
        </svg>

        <form onSubmit={handleSubmit} id="form_login">
          <div id="lbl_correo">
            <p>
              <span>Correo:</span>
            </p>
          </div>

          <div id="input_correo">
            <input
              className="Input_correo"
              id="Input_correo"
              type="email"
              value={login.email}
              onChange={handleChange}
            />
            <svg className="Lnea_4Login" viewBox="0 0 314 5">
              <path id="Lnea_4Login" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="img_contrasea">
            <input
              className="Input_Contra"
              id="Input_Contra"
              type={"password"}
              value={login.password}
              onChange={handleChange}
            />
            <svg className="Lnea_4Login" viewBox="0 0 314 5">
              <path id="Lnea_4Login" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="btn_ingresar">
            <button id="BtnIngresoLogin" className="BtnIngresoLogin">
              Ingresar
            </button>
          </div>

          <div id="btn_google">
            <div id="Grupo_903">
              <button
                id="Btn_google"
                className="Btn_google"
                onClick={(e) => {
                  e.preventDefault();
                  signInWithPopup(auth, provider)
                    .then((result) => {
                      // This gives you a Google Access Token. You can use it to access the Google API.
                      const credential =
                        GoogleAuthProvider.credentialFromResult(result);
                      const token = credential.accessToken;
                      // The signed-in user info.
                      const user = result.user;
                      crearCuenta(user);
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
                Iniciar sesión con Google
              </button>
              <img id="google_1" src="images/google_1.png" alt="boton google" />
            </div>
          </div>

          {/* <div id="btn_facebook">
            <div id="Grupo_904">
              <button
                id="BtnFacebook"
                className="BtnFacebook"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("facebook");
                }}
              >
                Ingresar
              </button>
              <img
                id="facebook"
                src="images/facebook.png"
                alt="boton facebook"
              />
            </div>
          </div> */}
        </form>

        <div id="lbl_registrate">
          <p>
            <span>¿No tienes una cuenta? </span>
            <Link
              to="/registrarse"
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
        <div id="lbl_contrasenaLogin">
          <p>
            <span>Contraseña:</span>
          </p>
        </div>
        <img
          id="img_cuerda"
          className="rounded mx-auto d-block"
          src="images/img_cuerda.png"
          alt="images/img_cuerda_2.png"
        />
      </div>
      <Modal
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
        titulo={"Mensaje"}
      >
        <Contenido>
          <p>Credenciales incorrectas</p>
        </Contenido>
      </Modal>
      ;
    </div>
  );
}

export default Body;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
  }
`;
