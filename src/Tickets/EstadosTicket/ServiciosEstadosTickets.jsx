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

  ListarEstadoTickets = async () => {
    const respuestaListaEstadoTickets = {
      respuesta: 0,
      mensaje: "",
      listaEstadoTikets: [],
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.get("/GetListarEstadoTicket", {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      respuestaListaEstadoTickets.respuesta = 1;
      respuestaListaEstadoTickets.mensaje = "Operación Exitosa";
      respuestaListaEstadoTickets.listaEstadoTikets = res.data;
    } catch (err) {
      respuestaListaEstadoTickets.respuesta = 0;
      respuestaListaEstadoTickets.mensaje =
        "Error al listar estado de los tickets - " + err;
    }

    return respuestaListaEstadoTickets;
  };
}

export default ServiciosEstados;
