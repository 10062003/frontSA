import Axios from "axios";

class ServiciosEstadosTicket {
  constructor() {}

  RegistrarEstadoTiket = async (estado) => {
    const respuestaEstadoTiket = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    try {
      const res = await Axios.post("/PostCrearEstadoTickets", estado, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });

      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);

      respuestaEstadoTiket.respuesta = 1;
      respuestaEstadoTiket.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaEstadoTiket.respuesta = 0;
      respuestaEstadoTiket.mensaje = "Error al crear el estado.";
    }

    return respuestaEstadoTiket;
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

export default ServiciosEstadosTicket;
