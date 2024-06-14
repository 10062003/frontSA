import Axios from "axios";

class ServiciosProfesion {
  constructor() {}

  RegistrarProfesion = async (profesion) => {
    const respuestaProfesion = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    try {
      const res = await Axios.post("/PostCrearProfesion", profesion, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });

      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);

      respuestaProfesion.respuesta = 1;
      respuestaProfesion.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaProfesion.respuesta = 0;
      respuestaProfesion.mensaje = "Error al crear la profesion.";
    }

    return respuestaProfesion;
  };
}

export default ServiciosProfesion;
