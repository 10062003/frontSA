import Axios from "axios";

class ServiciosUpa {
  constructor() {}

  RegistrarUpa = async (upa) => {
    const respuestaUpa = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");

    try {
      const res = await Axios.post("/PostCrearUpas", upa, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      respuestaUpa.respuesta = 1;
      respuestaUpa.mensaje = RespuestaServicio;
    } catch (err) {
      respuestaUpa.respuesta = 0;
      respuestaUpa.mensaje = "Error al crear Upa";
    }
    return respuestaUpa;
  };
}

export default ServiciosUpa;
