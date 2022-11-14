import React from "react";
import styled from "styled-components";

const Modal = ({ children, estado, cambiarEstado, titulo }) => {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>{titulo}</h3>
            </EncabezadoModal>

            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </BotonCerrar>

            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0vw;
  left: 0vw;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-itmes: center;
  justify-content: center;
`;

const ContenedorModal = styled.div`
  top: 80vw;
  width: 375px;
  height: 200px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  filter: drop-shadow(0px 3px 6px rgba(58, 0, 255, 0.678));
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 700;
    font-size: 25px;
    color: rgba(254, 63, 30, 1);
  }
`;

const BotonCerrar = styled.div`
    position:absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: none:
    background: none:
    cursor: pointer:
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
        background: #f2f2f2;
    }

    svg{
        width: 100%;
        height:100%;
    }
`;
