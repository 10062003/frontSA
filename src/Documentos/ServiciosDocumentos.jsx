import Axios from "axios";

class ServiciosDocumentos {
  constructor() {}

  RegistrarDocumento = async (documento) => {
    const respuestaDocumento = {
      respuesta: 0,
      mensaje: "",
    };
  
    const Token = sessionStorage.getItem("Token");
    console.log(Token);
  
    try {
      const res = await Axios.post("/PostCreaTipoDocumento", documento, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      
      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);
      
      respuestaDocumento.respuesta = 1;
      respuestaDocumento.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaDocumento.respuesta = 0;
      respuestaDocumento.mensaje = "Error al crear el tipo de documento.";
    }
  
    return respuestaDocumento;
  };
  
}

export default ServiciosDocumentos;
