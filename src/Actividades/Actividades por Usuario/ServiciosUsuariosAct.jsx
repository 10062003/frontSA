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

  // ListarUsuarioAct = async () => {
  //   const Token = sessionStorage.getItem("Token");
  //   try {
  //     const res = await Axios.post(
  //       "/PostListarUsuarioActividad",
  //       {},
  //       {
  //         headers: {
  //           Authorization: "Bearer " + Token,
  //         },
  //       }
  //     );
  //     console.log(res.data); // Imprimir datos en la consola
  //   } catch (err) {
  //     console.error("Error al listar los roles:", err);
  //   }
  // };
}

export default ServiciosUsuariosAct;
