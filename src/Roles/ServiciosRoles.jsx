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

  ListarRoles = async () => {
    const respuestaListaRoles = {
      respuesta: 0,
      mensaje: "",
      listaRoles: [],
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.get("/GetListarRol", {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      respuestaListaRoles.respuesta = 1;
      respuestaListaRoles.mensaje = "Operación Exitosa";
      respuestaListaRoles.listaRoles = res.data;
    } catch (err) {
      respuestaListaRoles.respuesta = 0;
      respuestaListaRoles.mensaje = "Error al listar los roles - " + err;
    }

    return respuestaListaRoles;
  };
}

export default ServiciosRoles;
