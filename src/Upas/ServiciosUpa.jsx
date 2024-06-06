import Axios from "axios";

class ServiciosUpa {
  constructor() {}

  RegistrarUpa = async (upa) => {
    const respuestaUpa = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    await Axios.post("/PostCrearUpas", upa, {
      headers: {
        Authorization: "Bearer " + Token,
      },
    })
      .then((res) => {
        const mensaje = res.data;
        const RespuestaServicio = mensaje.split(" ")[1];
        //console.log(RespuestaServicio);
        respuestaUpa.respuesta = 1;
        respuestaUpa.mensaje = RespuestaServicio;
        return respuestaUpa;
      })
      .catch((err) => {
        //console.log(err);
        respuestaUpa.respuesta = 0;
        respuestaUpa.mensaje = "Error al crear Upa";
        return respuestaUpa;
      });
  };
}

export default ServiciosUpa;
