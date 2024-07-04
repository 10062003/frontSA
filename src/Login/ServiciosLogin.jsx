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
        const Token = token ? token.slice(1, -1) : "";
        sessionStorage.setItem("Token", Token);
        respuestaLogin.respuesta = 1;
        respuestaLogin.mensaje = "Bienvenido";
      })
      .catch(() => {
        respuestaLogin.respuesta = 0;
        respuestaLogin.mensaje = "Usuario o contraseña incorrectos";
      });
    return respuestaLogin;
  };

  EnviarCorreoRecuperacion = async (email) => {
    const respuesta = await Axios.post(
      "/PostEnviarCorreoRecuperarContrasenna",
      { tESCorreo: email }
    );
    return respuesta.status === 200;
  };

  ValidarCodigoRecuperacion = async (email, code) => {
    const respuesta = await Axios.post(
      "/PostValidarCodigoRecuperarContrasenna",
      {
        tESCorreo: email,
        iCodigo: parseInt(code, 10),
      }
    );
    return respuesta.status === 200;
  };

  CambiarContrasenna = async (email, newPassword) => {
    const respuesta = await Axios.post("/PostCambiarContrasenna", {
      tESCorreo: email,
      tESContrasenna: newPassword,
    });
    return respuesta.status === 200;
  };
}

export default ServiciosLogin;
