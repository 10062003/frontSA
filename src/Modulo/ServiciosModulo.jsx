import Axios from "axios";

class ServiciosModulo {
  constructor() {}

  RegistrarModulo = async (modulo) => {
    const respuestaModulo = {
      respuesta: 0,
      mensaje: "",
    };

    const Token = sessionStorage.getItem("Token");
    console.log(Token);

    try {
      const res = await Axios.post("/PostCrearModulo", modulo, {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });

      const mensaje = res.data;
      const RespuestaServicio = mensaje.split(" ")[1];
      //console.log(RespuestaServicio);

      respuestaModulo.respuesta = 1;
      respuestaModulo.mensaje = RespuestaServicio;
    } catch (error) {
      //console.log(error);
      respuestaModulo.respuesta = 0;
      respuestaModulo.mensaje = "Error al crear el modulo.";
    }

    return respuestaModulo;
  };

  // ListarEstados = async () => {
  //   const respuestaListaEstados = {
  //     respuesta: 0,
  //     mensaje: "",
  //     listaEstados: [],
  //   };

  //   const Token = sessionStorage.getItem("Token");

  //   try {
  //     const res = await Axios.get("/GetListarEstado", {
  //       headers: {
  //         Authorization: "Bearer " + Token,
  //       },
  //     });
  //     respuestaListaEstados.respuesta = 1;
  //     respuestaListaEstados.mensaje = "Operación Exitosa";
  //     respuestaListaEstados.listaEstados = res.data;
  //   } catch (err) {
  //     respuestaListaEstados.respuesta = 0;
  //     respuestaListaEstados.mensaje = "Error al listar Upas - " + err;
  //   }

  //   return respuestaListaEstados;
  // };
}

export default ServiciosModulo;