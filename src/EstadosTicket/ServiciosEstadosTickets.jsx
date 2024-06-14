// import Axios from "axios";

<<<<<<< HEAD:src/EstadosTicket/ServiciosEstados.jsx
// class ServiciosEstados {
//   async RegistrarEstado(estado) {
//     const respuestaEstado = {
//       respuesta: 0,
//       mensaje: "",
//     };
=======
class ServiciosEstadosTickets {
  async RegistrarEstadoTickets(estado) {
    const respuestaEstado = {
      respuesta: 0,
      mensaje: "",
    };
>>>>>>> 5e78b8dd72cedcd2362258b1790dd22ca4cf9237:src/EstadosTicket/ServiciosEstadosTickets.jsx

//     const Token = sessionStorage.getItem("Token");
//     console.log(Token);

//     try {
//       const res = await Axios.post("/PostCrearEstadoTickets", estado, {
//         headers: {
//           Authorization: "Bearer " + Token,
//         },
//       });

//       const mensaje = res.data;
//       const RespuestaServicio = mensaje.split(" ")[1];
//       console.log(RespuestaServicio);

//       respuestaEstado.respuesta = 1;
//       respuestaEstado.mensaje = RespuestaServicio;
//     } catch (error) {
//       console.log(error);
//       respuestaEstado.respuesta = 0;
//       respuestaEstado.mensaje = "Error al crear el estado.";
//     }

//     return respuestaEstado;
//   }
// }

<<<<<<< HEAD:src/EstadosTicket/ServiciosEstados.jsx
// const serviciosEstados = new ServiciosEstados();
// export default serviciosEstados;
=======
const ServiciosEstados = new ServiciosEstadosTickets();
export default ServiciosEstados;
>>>>>>> 5e78b8dd72cedcd2362258b1790dd22ca4cf9237:src/EstadosTicket/ServiciosEstadosTickets.jsx
