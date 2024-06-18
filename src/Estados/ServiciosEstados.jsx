import Axios from "axios";

class ServiciosEstados {
  constructor() {}

  RegistrarEstado = async (estado) => {
    const respuestaEstado = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    try {
      const res = await Axios.post("/PostCrearEstado", estado, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });

      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);

      respuestaEstado.respuesta = 1;
      respuestaEstado.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaEstado.respuesta = 0;
      respuestaEstado.mensaje = "Error al crear el estado.";
    }

    return respuestaEstado;
  };

  ListarEstados = async () => {
    const respuestaListaEstados = {
      respuesta: 0,
      mensaje: "",
      listaEstados: [],
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.get("/GetListarEstado", {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      respuestaListaEstados.respuesta = 1;
      respuestaListaEstados.mensaje = "Operación Exitosa";
      respuestaListaEstados.listaEstados = res.data;
    } catch (err) {
      respuestaListaEstados.respuesta = 0;
      respuestaListaEstados.mensaje = "Error al listar Upas - " + err;
    }

    return respuestaListaEstados;
  };
}

export default ServiciosEstados;
