import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/UserContext";
import { Link } from "react-router-dom";

//se declara afuera para no recrearlo en cada render
const emptyLogin = {
  Input_correo: "",
  Input_Contra: "",
};

function Body() {
  const [login, setLogin] = useState(emptyLogin);
  const { loginContext } = useUser();
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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await loginContext(login.Input_correo, login.Input_Contra);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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

        <form onSubmit={handleSubmit}>
          <div id="lbl_correo">
            <p>
              <span>Correos/Email:</span>
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
        <img id="img_cuerda" src="images/img_cuerda.png" />

        <div id="btn_google">
          <div id="Grupo_903">
            <button id="Btn_google" className="Btn_google">
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
