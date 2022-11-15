import React from "react";
import BotonBack from "./BotonBack";
import { useState, useEffect } from "react";
import { crearDocumento, updateDocumento } from "../Hooks/useDoc";
import { useUser } from "./UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, app } from "../components/Firebase";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { Container, Form, Button, Message } from "semantic-ui-react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Modal from "../components/Modal";
import styled from "styled-components";

function PerfilBody() {
  const { usuarioLoged, logOut } = useUser();
  const [loading, setLoading] = useState(true);
  const [foto, setFoto] = useState("");
  const [update, setUpdate] = useState(true);
  const [estadoModal, cambiarEstadoModal] = useState(false);

  const storage = getStorage(app);
  const storageRef = ref(storage, usuarioLoged.email);

  const formik = useFormik({
    initialValues: {
      Input_Nombre: " ",
      Input_Apellido: " ",
      input_Correo: "",
      input_peso: "",
      Input_altura: "",
    },
    validationSchema: Yup.object({
      Input_Nombre: Yup.string()
        .required("El nombre es obligatorio")
        .matches(/^[aA-zZ\s]+$/, "Solo se aceptan letras"),
      Input_Apellido: Yup.string()
        .required("El apellido es obligatorio")
        .matches(/^[aA-zZ\s]+$/, "Solo se aceptan letras"),
      // input_Correo: Yup.string()
      //   .email("No es un email valido")
      //   .required("El email es obligatorio"),
      input_peso: Yup.number()
        .integer("Solo se admite números enteros")
        .moreThan(40, "El peso debe ser mayor a 40kg")
        .lessThan(250, "El peso debe ser menor a 250kg"),
      Input_altura: Yup.number()
        .integer("Solo se admite números enteros")
        .moreThan(130, "La altura debe ser mayor a 130 cm")
        .lessThan(250, "La altura debe ser menor a 250 cm"),
    }),
    onSubmit: (valores) => {
      // console.log(valores);
      handleSubmit(valores);
    },
  });

  async function handleSubmit(valores) {
    // e.preventDefault();
    try {
      await crearDocumento("usuarios", valores.input_Correo, {
        nombre: valores.Input_Nombre,
        apellido: valores.Input_Apellido,
        peso: valores.input_peso,
        altura: valores.Input_altura,
      });
      // alert("done");
    } catch (error) {
      console.log(error);
    }
  }

  const getEventos = async () => {
    setLoading(true);
    const docRef = doc(db, "usuarios", usuarioLoged.email);
    const querySnapshot = await getDoc(docRef);
    let valores;
    if (querySnapshot.exists()) {
      setFoto(querySnapshot.data().foto);
      valores = {
        Input_Nombre: querySnapshot.data().nombre,
        Input_Apellido: querySnapshot.data().apellido,
        input_Correo: usuarioLoged.email,
        input_peso: querySnapshot.data().peso,
        Input_altura: querySnapshot.data().altura,
      };

      // console.log(valores);
      formik.setFieldValue("Input_Nombre", querySnapshot.data().nombre);
      formik.setFieldValue("Input_Apellido", querySnapshot.data().apellido);
      formik.setFieldValue("input_Correo", usuarioLoged.email);
      formik.setFieldValue("input_peso", querySnapshot.data().peso);
      formik.setFieldValue("Input_altura", querySnapshot.data().altura);
      setLoading(false);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getUrl = async () => {
    setFoto(await getDownloadURL(storageRef));
  };

  useEffect(() => {
    // getUrl();
    getEventos();
  }, []);

  useEffect(() => {}, [foto, estadoModal]);

  return (
    <div>
      <div id="Perfil">
        <svg className="Trazado_48" viewBox="0 0 429 926">
          <path
            id="Trazado_48"
            d="M 0 0 L 429 0 L 429 926 L 0 926 L 0 0 Z"
          ></path>
        </svg>

        {/* Botón Log out */}
        <button onClick={logOut}>
          <div id="BtnLog_ht">
            <div className="fondoBtnLogOut btn">
              <svg className="fondoBtn" viewBox="0 0 285 90">
                <path
                  className="fondoBtnClassLogOut"
                  d="M 18 0 L 171 0 C 180.9411315917969 0 189 8.058874130249023 189 18 L 189 36 C 189 45.94112396240234 180.9411315917969 54 171 54 L 18 54 C 8.058874130249023 54 0 45.94112396240234 0 36 L 0 18 C 0 8.058874130249023 8.058874130249023 0 18 0 Z"
                ></path>
              </svg>
              <div className="LogOutPerfilbtn">
                <span>Cerrar sesión</span>
              </div>
            </div>
          </div>
        </button>

        {/* boton de regreso */}
        <BotonBack />

        <div id="Perfil_ht">
          <span>Perfil</span>
        </div>

        <Form onSubmit={formik.handleSubmit}>
          {/* imagen de perfil, falta que se agrande */}
          {/* <img
            id="n_838764_g"
            src="/images/Perfil/n_838764_g.png"
            alt="foto de perfil"
          /> */}

          {/* <label className="botonFoto">
            {foto !== "" ? (
              <img className="fotoPerfil" src={foto} alt="imagen yoga" />
            ) : (
              <img
                className="fotoPerfil"
                src="/images/perfil/perfil.png"
                alt="imagen yoga"
              />
            )}
            <input
              hidden
              type="file"
              onChange={(e) => {
                if (e.target.files[0].type.includes("image/")) {
                  uploadBytes(storageRef, e.target.files[0]).then(
                    (snapshot) => {
                      getUrl();
                      setUpdate(!update);
                    }
                  );
                }
                // console.log(e.target.files[0]);
              }}
            ></input>
          </label> */}
          <svg
            id="n_838764_g"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="white"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          {/* input nombre */}
          <div id="Grupo_816_ha">
            <div id="Grupo_815_hb">
              <div id="Grupo_850">
                <Form.Input
                  type="text"
                  className="Input_Nombre"
                  name="Input_Nombre"
                  value={formik.values.Input_Nombre}
                  onChange={formik.handleChange}
                  error={formik.errors.Input_Nombre}
                />
              </div>
            </div>
          </div>

          <div id="Grupo_853">
            <div id="Nombre_hn">
              <span>Nombre:</span>
            </div>
          </div>

          {/* input apellido */}
          <div id="Grupo_870">
            <div id="Apellido_hn">
              <span>Apellido:</span>
            </div>
          </div>

          <div id="Grupo_925">
            <Form.Input
              type="text"
              className="Input_Apellido_Perf"
              name="Input_Apellido"
              value={formik.values.Input_Apellido}
              onChange={formik.handleChange}
              error={formik.errors.Input_Apellido}
            />
          </div>

          {/* input correo */}
          {/* <div id="Grupo_852">
            <div id="Grupo_901">
              <Form.Input
                type="text"
                className="input_Correo"
                name="input_Correo"
                value={formik.values.input_Correo}
                onChange={formik.handleChange}
                error={formik.errors.input_Correo}
                readOnly="readOnly"
              />
            </div>
          </div>
          <div id="Correo">
            <span>Correo:</span>
          </div> */}

          {/* input peso */}
          <div id="Altura">
            <span>Peso:</span>
          </div>

          <div id="Grupo_906">
            <div id="Grupo_901_h">
              <Form.Input
                type="number"
                className="input_peso"
                name="input_peso"
                placeholder="65 kg"
                value={formik.values.input_peso}
                onChange={formik.handleChange}
                error={formik.errors.input_peso}
              />
            </div>
          </div>
          {/* input altura */}
          <div id="Correo">
            <span>Altura:</span>
          </div>
          <div id="Grupo_852">
            <div id="Grupo_901_ia">
              <Form.Input
                type="number"
                className="Input_altura"
                name="Input_altura"
                placeholder="165 cm"
                value={formik.values.Input_altura}
                onChange={formik.handleChange}
                error={formik.errors.Input_altura}
              />
            </div>
          </div>

          {/* Botón Actualizar */}
          <button type="submit">
            <div
              className="BtnActualizar btn"
              onClick={() => {
                cambiarEstadoModal(!estadoModal);
              }}
            >
              <svg className="fondoBtnActu" viewBox="0 0 225 60">
                <path
                  className="fondoBtnClassActu"
                  d="M 18 0 L 171 0 C 180.9411315917969 0 189 8.058874130249023 189 18 L 189 36 C 189 45.94112396240234 180.9411315917969 54 171 54 L 18 54 C 8.058874130249023 54 0 45.94112396240234 0 36 L 0 18 C 0 8.058874130249023 8.058874130249023 0 18 0 Z"
                ></path>
              </svg>
              <div className="ActualizarPerfilbtn">
                <span>Actualizar</span>
              </div>
            </div>
          </button>
        </Form>
        <Modal
          estado={estadoModal}
          cambiarEstado={cambiarEstadoModal}
          titulo={"Mensaje"}
        >
          <Contenido>
            <p>Datos Actualizados</p>
          </Contenido>
        </Modal>
      </div>
    </div>
  );
}

export default PerfilBody;

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
