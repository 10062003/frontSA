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
        const Token = token ? token.slice(1, -1) : "";
        sessionStorage.setItem("Token", Token);
        respuestaLogin.respuesta = 1;
        respuestaLogin.mensaje = "Bienvenido";
        //console.log("Usuario encontrado");
      })
      .catch((err) => {
        //console.log(err);
        respuestaLogin.respuesta = 0;
        respuestaLogin.mensaje = "Usuario o contraseña incorrectos";
        console.log("Usuario no encontrado");
      });
    return respuestaLogin;
  };
}

export default ServiciosLogin;
