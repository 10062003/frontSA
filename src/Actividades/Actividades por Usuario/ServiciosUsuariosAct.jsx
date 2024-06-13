import Axios from "axios";

class ServiciosUsuariosAct {
  constructor() {}

  RegistrarUsuariosAct = async (usuarioAct) => {
    const respuestaUsuarioAct = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    try {
      const res = await Axios.post("/PostCrearUsuarioActividad", usuarioAct, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });

      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);

      respuestaUsuarioAct.respuesta = 1;
      respuestaUsuarioAct.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaUsuarioAct.respuesta = 0;

      // Verifica si el error tiene una respuesta
      if (error.response) {
        // Extrae los datos de la respuesta del error
        const errorData = error.response.data;
        const errorStatus = error.response.status;
        toast.error(errorData);

        // Usa los datos del error para construir el mensaje
        respuestaUsuarioAct.mensaje = `Error ${errorStatus}: ${errorData}`;
      } else {
        // Manejo de errores sin respuesta (posibles errores de red)
        respuestaUsuarioAct.mensaje = "Error al asignar actividad.";
      }
    }

    return respuestaUsuarioAct;
  };
}

export default ServiciosUsuariosAct;
