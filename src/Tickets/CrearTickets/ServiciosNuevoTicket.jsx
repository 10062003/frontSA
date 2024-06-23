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
  
    return respuestaTipoTicket;
  };
  
}

export default ServiciosNuevoTicket;
