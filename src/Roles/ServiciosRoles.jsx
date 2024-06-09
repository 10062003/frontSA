import Axios from "axios";

class ServiciosRoles {
  constructor() {}

  RegistrarRol = async (rol) => {
    const respuestaRol = {
      respuesta: 0,
      mensaje: "",
    };
  
    const Token = sessionStorage.getItem("Token");
    console.log(Token);
  
    try {
      const res = await Axios.post("/PostCreaRol", rol, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      
      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);
      
      respuestaRol.respuesta = 1;
      respuestaRol.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaRol.respuesta = 0;
      respuestaRol.mensaje = "Error al crear el rol.";
    }
  
    return respuestaRol;
  };
  
}

export default ServiciosRoles;
