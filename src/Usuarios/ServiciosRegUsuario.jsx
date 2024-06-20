import Axios from "axios";

class ServiciosUsuario {
  constructor() {}

  RegistrarUsuario = async (usuario) => {
    const respuestaUsuario = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    try {
      const res = await Axios.post("/PostCrearUsuario", usuario, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });

      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);

      respuestaUsuario.respuesta = 1;
      respuestaUsuario.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaUsuario.respuesta = 0;
      respuestaUsuario.mensaje = "Error al crear el usuario.";
    }
    return respuestaUsuario;
  };

  ListarUsuarios = async () => {
    const respuestaListaUsuarios = {
      respuesta: 0,
      mensaje: "",
      listaUsuarios: [],
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.get("/GetListarUsuarios", {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      respuestaListaUsuarios.respuesta = 1;
      respuestaListaUsuarios.mensaje = "Operación Exitosa";
      respuestaListaUsuarios.listaUsuarios = res.data;
      //console.log(res.data);
    } catch (err) {
      respuestaListaUsuarios.respuesta = 0;
      respuestaListaUsuarios.mensaje = "Error al listar los usuarios - " + err;
    }

    return respuestaListaUsuarios;
  };
}

export default ServiciosUsuario;
