import Axios from "axios";

class ServiciosEstados {
  async RegistrarEstado(estado) {
    const respuestaEstado = {
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

      respuestaEstado.respuesta = 1;
      respuestaEstado.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaEstado.respuesta = 0;
      respuestaEstado.mensaje = "Error al crear el estado.";
    }

    return respuestaEstado;
  }
}

const serviciosEstados = new ServiciosEstados();
export default serviciosEstados;
