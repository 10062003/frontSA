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
      respuestaUsuarioAct.respuesta = 1;
      respuestaUsuarioAct.mensaje = RespuestaServicio;
    } catch (error) {
      respuestaUsuarioAct.respuesta = 0;

      if (error.response) {
        const errorData = error.response.data;
        const errorStatus = error.response.status;
        toast.error(errorData);
        respuestaUsuarioAct.mensaje = `Error ${errorStatus}: ${errorData}`;
      } else {
        respuestaUsuarioAct.mensaje = "Error al asignar actividad.";
      }
    }

    return respuestaUsuarioAct;
  };

  ListarUsuariosAct = async (estado) => {
    const respuestaUsuarioAct = {
      respuesta: 0,
      listaUsuariosAct: [],
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.post(
        "/PostListarUsuarioActividad",
        { MEstadoId: estado },
        {
          headers: {
            Authorization: "Bearer " + Token,
            "Content-Type": "application/json",
          },
        }
      );

      respuestaUsuarioAct.respuesta = 1;
      respuestaUsuarioAct.listaUsuariosAct = res.data;
      console.log("Respuesta del servidor:", res.data); // Imprime el JSON en la consola
    } catch (error) {
      console.log(error);
      respuestaUsuarioAct.respuesta = 0;
      respuestaUsuarioAct.mensaje =
        "Error al listar las actividades por usuario.";
    }

    return respuestaUsuarioAct;
  };
}

export default ServiciosUsuariosAct;
