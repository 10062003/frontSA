import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import "../../index.css";
import { esAlfanumerico } from "../regexp";
import { Row, Form } from "react-bootstrap";

export default function RegistrarEstado() {
  const [etdEstado, setNombre] = useState("");
  const formRef = useRef(null);
  useEffect(() => {
    const token = sessionStorage.getItem("Token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: "Debe iniciar sesión para acceder a esta página",
        showConfirmButton: false,
        timer: 5500,
        iconColor: "#F7931E",
        backdrop: `
      rgba(255,255,255,1)
    `,
      });
      window.location.href = "/#/login";
      return;
    }
  }, []);
  const limpiarCampos = () => {
    setNombre("");
  };
  const guardar = async (e) => {
    e.preventDefault();
    const estado = {
        etdEstado,
    };

    if (!esAlfanumerico(etdEstado, 3, 20)) {
      Swal.fire({
        icon: "error",
        title: "Error en el nombre",
        text: "El nombre debe contener solo letras y tener entre 3 y 30 caracteres",
        showConfirmButton: false,
        timer: 5500,
        iconColor: "#F7931E",
      });
    } else {
      const token = sessionStorage.getItem("Token");
      const Token = token.slice(1, -1);
      const respuesta = await Axios.post("/PostCrearEstado", estado, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      const mensaje = respuesta.data;
      Swal.fire({
        icon: "success",
        title: "¡Estado Registrado!",
        showConfirmButton: false,
        timer: 5500,
        iconColor: "#00A99D",
      });
      limpiarCampos();
      window.location.href = "/#/listaEstados";
    }
  };

  return (
    <div className="container max-height-75 vh-100 overflow-hidden">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="card">
            <div className="container text-center "></div>
            <div
              id="colorAceptar"
              className="card-header color-aceptar text-center"
            >
              <h5>Registro Estado</h5>
            </div>
            <form className="container mt-3 mb-3">
              <Row className="mb-3">
                <Form.Group controlId="formBasicEmail" className="col col-sm-12">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="name"
                    name="Nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </Form.Group>
                </Row>
              <Row className="mb-3"></Row>
              <Row className="mb-3">
                <Form.Group
                  controlId="formGridCheckbox"
                  className="col col-sm-6"
                >
                  <button
                    id="btnAceptar"
                    type="submit"
                    className="me-4 btn btn-aceptar btn-lg btn-block"
                    onClick={guardar}
                    ref={formRef}
                  >
                    Registrar
                  </button>
                  <button
                    id="btnCancelar"
                    type="reset"
                    className="me-4 btn btn-cancelar btn-lg btn-block"
                  >
                    Cancelar
                  </button>
                </Form.Group>
              </Row>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
