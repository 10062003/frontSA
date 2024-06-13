import Axios from "axios";

class ServiciosActividad {
  constructor() {}

  RegistrarActividad = async (actividad) => {
    const respuestaActividad = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    try {
      const res = await Axios.post("/PostCrearActividad", actividad, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });

      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      console.log(RespuestaServicio);

      respuestaActividad.respuesta = 1;
      respuestaActividad.mensaje = RespuestaServicio;
    } catch (error) {
      console.log(error);
      respuestaActividad.respuesta = 0;
      respuestaActividad.mensaje = "Error al crear el rol.";
    }

    return respuestaActividad;
  };
}

export default ServiciosActividad;
