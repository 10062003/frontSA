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

    const handleSubmit = async (e) => {
      e.preventDefault();

      const ticket = {
        mtTipoTicKets: nombre.campo,
        mtTipoIdEstado: estado.campo,
      };

      if (validarCampo(nombre.campo, expresiones.nombre) && estado.campo) {
        try {
          const respuesta = await servicioTicket.RegistrarTipoTicket(ticket);
          console.log("Respuesta del servidor:", respuesta);

          if (respuesta && respuesta.respuesta === 1) {
            cambiarNombre({ campo: "", valido: null });
            cambiarEstado({ campo: "", valido: null });
            toast.success(
              "Tipo de ticket " + nombre.campo + " registrado correctamente",
              {
                duration: 4000,
              }
            );
          } else {
            toast.error("Error al enviar el tipo de ticket, revise los campos");
          }
        } catch (error) {
          toast.error(
            "Error de servidor: no se pudo registrar el tipo de ticket"
          );
          console.error("Error en el servidor:", error);
        }
      } else {
        toast.error("Error al enviar el tipo de ticket, revise los campos");
        console.log("Error de validación de campos");
      }
    };

    return respuestaUsuario;
  };
}

export default ServiciosUsuario;
