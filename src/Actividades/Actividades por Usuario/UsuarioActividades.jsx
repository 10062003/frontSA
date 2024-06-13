import { Toaster, toast } from "sonner";
import ButtonBasic from "../../components/ui/ButtonBasic";
import SeleccionConValidacion from "../../components/ui/SeleccionConValidacion";
import { act, useState } from "react";
import {
  BookUser,
  BarChart3,
  TextCursorInput,
  Orbit,
  AlignLeft,
  Component,
  Bell,
  BellRing,
  User,
} from "lucide-react";
import ServiciosUsuariosAct from "./ServiciosUsuariosAct";

const UsuarioActividades = () => {
  const servicioUsuarioAct = new ServiciosUsuariosAct();

  const opcionesEstado = [
    {
      campo: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      label: "Activado",
    },
    {
      campo: "1a9d5660-0fb2-4b3e-857f-a45e3d1a5dbd",
      label: "Desactivado",
    },
  ];

  const opcionesActividadUpa = [
    {
      campo: "84db4fc4-533f-47cb-b108-90ac6dcb9db5",
      label: "Lavar Tanques",
    },
  ];

  const opcionesUsuario = [
    {
      campo: "c346f843-ea27-4ddb-9921-7aa8a40f8cf6",
      label: "Kevin Holguin",
    },
  ];

  const [actividadUpa, cambiarActividadUpa] = useState({
    campo: "",
    valido: null,
    label: "",
  });
  const [estado, cambiarEstado] = useState({
    campo: "",
    valido: null,
    label: "",
  });
  const [usuario, cambiarUsuario] = useState({
    campo: "",
    valido: null,
    label: "",
  });

  const validarCampo = (campo, expresion) => expresion.test(campo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const actividad = {
      usrAcIdActividad: actividadUpa.campo,
      usrAcIdUsuario: usuario.campo,
      usrAcIdEstado: estado.campo,
      usrAcUltimaModificacion: new Date(),
    };

    if (
      actividadUpa.valido === "true" &&
      estado.valido === "true" &&
      usuario.valido === "true"
    ) {
      try {
        const respuesta =
          await servicioUsuarioAct.RegistrarUsuariosAct(actividad);
        console.log("Respuesta del servidor:", respuesta);

        if (respuesta && respuesta.respuesta === 1) {
          cambiarActividadUpa({ campo: "", valido: null });
          cambiarEstado({ campo: "", valido: null });
          cambiarUsuario({ campo: "", valido: null });
          toast.success("Actividad asignada correctamente", {
            duration: 4000,
          });
        } else {
          toast.error("Error al asignar actividad, revise los campos arriba");
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo asignar la actividad");
        console.error("Error en el servidor:", error);
      }
    } else {
      toast.error("Error al asignar la actividad, revise los campos abajo");
      console.log("Error de validación de campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Asignar actividad
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {/* Select Actividad */}
        <SeleccionConValidacion
          label="Actividad"
          name="actividadUpa"
          errorMsm="Este campo es requerido"
          estado={actividadUpa}
          cambiarEstado={cambiarActividadUpa}
          opciones={opcionesActividadUpa}
          icon={
            <BellRing
              className={`${actividadUpa.valido === "true" ? "opacity-100 text-exito" : actividadUpa.valido === "false" ? "opacity-100 text-error" : actividadUpa.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        />

        {/* Select Estado */}
        <SeleccionConValidacion
          label="Estado"
          name="estado"
          errorMsm="Este campo es requerido"
          estado={estado}
          cambiarEstado={cambiarEstado}
          opciones={opcionesEstado}
          icon={
            <Orbit
              className={`${estado.valido === "true" ? "opacity-100 text-exito" : estado.valido === "false" ? "opacity-100 text-error" : estado.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        />

        {/* Select Usuario */}
        <SeleccionConValidacion
          label="Usuario"
          name="usuario"
          errorMsm="Este campo es requerido"
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          opciones={opcionesUsuario}
          icon={
            <User
              className={`${usuario.valido === "true" ? "opacity-100 text-exito" : usuario.valido === "false" ? "opacity-100 text-error" : usuario.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        />

        {/* Boton Registrar */}
        <div className="flex flex-col col-span-1 sm:col-span-2 items-center">
          <ButtonBasic
            children={"Registrar"}
            className="sm:w-[30%] cursor-pointer text-white hover:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] bg-green-700 border-green-700 text-xl"
          />
        </div>
      </form>
      <Toaster richColors closeButton />
    </main>
  );
};

export default UsuarioActividades;
