import React from "react";
import { useState } from "react";
import BotonBack from "./BotonBack";
import { useUser } from "../components/UserContext";
import { useNavigate } from "react-router-dom";
import { updateDocumento } from "../Hooks/useDoc";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { Container, Form, Button } from "semantic-ui-react";

function CrearUsuarioBody() {
  const navigate = useNavigate();
  const { signup, update } = useUser();

  async function handleSubmit(valores) {
    // e.preventDefault();
    try {
      await signup(valores.Input_email, valores.Input_contrasena);
      await update(valores.Input_nombre);
      await updateDocumento("usuarios", valores.Input_email, {
        nombre: valores.Input_nombre,
        apellido: valores.Input_apellido,
        peso: "",
        altura: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      Input_nombre: "",
      Input_apellido: "",
      Input_email: "",
      Input_contrasena: "",
      Input_contrasenaF: "",
    },
    validationSchema: Yup.object({
      Input_nombre: Yup.string().required("El nombre es obligatorio"),
      Input_apellido: Yup.string().required("El apellido es obligatorio"),
      Input_email: Yup.string()
        .email("No es un email valido")
        .required("El email es obligatorio"),
      Input_contrasena: Yup.string()
        .required("La contraseña es obligatorio")
        .oneOf([Yup.ref("Input_contrasenaF")], "Las contraseñas no son iguales")
        .min(8),
      Input_contrasenaF: Yup.string()
        .required("Porfavor confirme su contraseña")
        .min(8),
    }),
    onSubmit: (valores) => {
      handleSubmit(valores);
    },
  });

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

        {/* boton regreso */}
        <BotonBack />

        <Form onSubmit={formik.handleSubmit}>
          <div id="lbl_Crear_Usuario">
            <span>Crear Usuario</span>
          </div>

          <div id="lbl_nombre">
            <span>Nombre:</span>
          </div>

          <div id="img_Nombre">
            <Form.Input
              type="text"
              className="Input_nombre"
              name="Input_nombre"
              // value={registro.Input_nombre}
              onChange={formik.handleChange}
              error={formik.errors.Input_nombre}
              value={formik.values.Input_nombre}
            />

            <svg className="Lnea_1_c" viewBox="0 0 314 5">
              <path id="Lnea_1_c" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="lbl_apellido">
            <span>Apellido:</span>
          </div>

          <div id="img_Email">
            <Form.Input
              type="text"
              className="Input_apellido"
              id="Input_apellido"
              // value={registro.Input_apellido}
              onChange={formik.handleChange}
              error={formik.errors.Input_apellido}
              value={formik.values.Input_apellido}
            />

            <svg className="Lnea_2_c" viewBox="0 0 314 5">
              <path id="Lnea_2_c" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="lbl_email">
            <span>Email:</span>
          </div>

          <div id="img_email">
            <Form.Input
              type="email"
              className="Input_email"
              id="Input_email"
              // value={registro.Input_email}
              onChange={formik.handleChange}
              error={formik.errors.Input_email}
              value={formik.values.Input_email}
            />

            <svg className="Lnea_4" viewBox="0 0 314 5">
              <path id="Lnea_4" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="lbl_contrasena">
            <span>Contraseña:</span>
          </div>

          <div id="img_contrasenaIni">
            <Form.Input
              type="password"
              className="Input_contrasena"
              id="Input_contrasena"
              // value={registro.Input_contrasena}
              onChange={formik.handleChange}
              error={formik.errors.Input_contrasena}
              value={formik.values.Input_contrasena}
            />

            <svg className="Lnea_3_c" viewBox="0 0 314 5">
              <path id="Lnea_3_c" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          <div id="lbl_contrasenaF">
            <span>Confirmar contraseña:</span>
          </div>

          <div id="img_contrasenaF">
            <Form.Input
              type="password"
              className="Input_contrasenaF"
              id="Input_contrasenaF"
              // value={registro.Input_contrasenaF}
              onChange={formik.handleChange}
              error={formik.errors.Input_contrasenaF}
              value={formik.values.Input_contrasenaF}
            />

            <svg className="Lnea_4_c" viewBox="0 0 314 5">
              <path id="Lnea_4_c" d="M 0 0 L 314 0"></path>
            </svg>
          </div>

          {/* boton Crear Cuenta */}
          <button type="submit">
            <div id="btn_ingresarCrearCuenta" className="btn">
              <svg className="Rectngulo_98_db ">
                <rect
                  id="Rectngulo_98_db"
                  rx="9"
                  ry="9"
                  x="0"
                  y="0"
                  width="200"
                  height="62"
                ></rect>
              </svg>
              <div id="Ingresar_dc">
                <span>Crear cuenta</span>
              </div>
            </div>
          </button>
        </Form>
      </div>
    </div>
  );
}

export default CrearUsuarioBody;
