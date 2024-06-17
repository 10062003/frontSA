import Axios from "axios";

class ServiciosUpa {
  constructor() {}

  RegistrarUpa = async (upa) => {
    const respuestaUpa = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.post("/PostCrearUpas", upa, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      respuestaUpa.respuesta = 1;
      respuestaUpa.mensaje = RespuestaServicio;
    } catch (err) {
      respuestaUpa.respuesta = 0;
      respuestaUpa.mensaje = "Error al crear Upa";
    }
    return respuestaUpa;
  };

  ListarUpas = async () => {
    const respuestaListaUpas = {
      respuesta: 0,
      mensaje: "",
      listaUpas: [],
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.get("/GetListarUpas", {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      respuestaListaUpas.respuesta = 1;
      respuestaListaUpas.mensaje = "Operación Exitosa";
      respuestaListaUpas.listaUpas = res.data;
    } catch (err) {
      respuestaListaUpas.respuesta = 0;
      respuestaListaUpas.mensaje = "Error al listar Upas - " + err;
    }

    return respuestaListaUpas;
  };

  ListarEstados = async () => {
    const respuestaListaUpas = {
      respuesta: 0,
      mensaje: "",
      listaUpas: [],
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.get("/GetListarEstado", {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      respuestaListaUpas.respuesta = 1;
      respuestaListaUpas.mensaje = "Operación Exitosa";
      respuestaListaUpas.listaUpas = res.data;
    } catch (err) {
      respuestaListaUpas.respuesta = 0;
      respuestaListaUpas.mensaje = "Error al listar Upas - " + err;
    }

    return respuestaListaUpas;
  };
}

export default ServiciosUpa;
