import Axios from "axios";

class ServiciosNuevoTicket {
  constructor() {}

  RegistrarNuevoTicket = async (ticket) => {
    const respuestaNuevoTicket = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    try {
      const res = await Axios.post("/PostCrearTicket", ticket, {
        headers: {
          Authorization: "Bearer " + Token,
          "Content-Type": "application/json", // Ensure the content type is set to application/json
        },
      });

      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);

      respuestaNuevoTicket.respuesta = 1;
      respuestaNuevoTicket.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaNuevoTicket.respuesta = 0;
      respuestaNuevoTicket.mensaje = "Error al crear el Ticket.";
    }

    return respuestaNuevoTicket;
  };

  ListarTickets = async (tipoTicketId) => {
    const respuestaTickets = {
      respuesta: 0,
      listaTipoTicket: [],
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.post(
        "/GetListarTicket",
        { MTIdTipoTickets: tipoTicketId },
        {
          headers: {
            Authorization: "Bearer " + Token,
            "Content-Type": "application/json",
          },
        }
      );

      respuestaTickets.respuesta = 1;
      respuestaTickets.listaTipoTicket = res.data;
      //console.log(respuestaTickets.listaTipoTicket);
    } catch (error) {
      console.log(error);
      respuestaTickets.respuesta = 0;
      respuestaTickets.mensaje = "Error al listar los Tickets.";
    }

    return respuestaTickets;
  };
}

export default ServiciosNuevoTicket;
