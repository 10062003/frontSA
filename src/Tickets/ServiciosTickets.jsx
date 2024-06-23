import Axios from "axios";

class ServiciosTickets {
  constructor() {}

  RegistrarTipoTicket = async (ticket) => {
    const respuestaTipoTicket = {
      respuesta: 0,
      mensaje: "",
    };
  
    const Token = sessionStorage.getItem("Token");
    console.log(Token);
  
    try {
      const res = await Axios.post("/PostCrearTipoTicket", ticket, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      
      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);
      
      respuestaTipoTicket.respuesta = 1;
      respuestaTipoTicket.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaTipoTicket.respuesta = 0;
      respuestaTipoTicket.mensaje = "Error al crear el tipo de ticket.";
    }
  
    return respuestaTipoTicket;
  };
  ListarTipoTicket = async () => {
    const respuestaListaTipoTicket = {
      respuesta: 0,
      mensaje: "",
      listaTipoTicket: [],
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.get("/GetListarTipoTicket", {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      respuestaListaTipoTicket.respuesta = 1;
      respuestaListaTipoTicket.mensaje = "Operación Exitosa";
      respuestaListaTipoTicket.listaTipoTicket = res.data;
    } catch (err) {
      respuestaListaTipoTicket.respuesta = 0;
      respuestaListaTipoTicket.mensaje = "Error al listar los tipos de ticket. - " + err;
    }

    return respuestaListaTipoTicket;
  };
}

export default ServiciosTickets;
