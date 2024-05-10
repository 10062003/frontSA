import Axios from "axios";

class ServiciosLogin {
  constructor() {}

  IniciarSesion = async (user) => {
    const respuestaLogin = {
      respuesta: 0,
      mensaje: "",
    };

    await Axios.post("/Login", user)
      .then((res) => {
        const mensaje = res.data;
        const token = mensaje.split(" ")[1];
        console.log(token);
        sessionStorage.setItem("Token", token);
        respuestaLogin.respuesta = 1;
        respuestaLogin.mensaje = "Bienvenido";
        return respuestaLogin;
      })
      .catch((err) => {
        console.log(err);
        respuestaLogin.respuesta = 0;
        respuestaLogin.mensaje = "Usuario o contraseña incorrectos";
        return respuestaLogin;
      });
  };
}

export default ServiciosLogin;
