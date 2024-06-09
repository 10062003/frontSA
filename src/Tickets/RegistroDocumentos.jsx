import { Toaster, toast } from "sonner";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputRegistros from "../components/ui/InputRegistros";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";
import ServiciosDocumentos from "./ServiciosDocumentos"; // Cambiado de ServiciosRoles a ServiciosDocumentos
import { useState } from "react";
import { BookUser, BarChart3, TextCursorInput, Orbit, Files } from "lucide-react";

const RegistroDocumentos = () => {
  const servicioDocumento = new ServiciosDocumentos(); // Cambiado de ServiciosRoles a ServiciosDocumentos
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos, de 3 a 20.
  };

  const opciones = [
    {
      campo: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      label: "Activado",
    },
    {
      campo: "1a9d5660-0fb2-4b3e-857f-a45e3d1a5dbd",
      label: "Desactivado",
    },
  ];

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [estado, cambiarEstado] = useState({ campo: "", valido: null });

  const validarCampo = (campo, expresion) => expresion.test(campo);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const documento = {
      tdocTipoDocumento: nombre.campo,
      tdocIdEstado: estado.campo
    };
  
    console.log("Nombre:", nombre.campo);
    console.log("Estado:", estado.campo);
  
    if (validarCampo(nombre.campo, expresiones.nombre) && estado.campo) {
      try {
        const respuesta = await servicioDocumento.RegistrarDocumento(documento); // Cambiado de servicioRol.RegistrarRol a servicioDocumento.RegistrarDocumento
        console.log("Respuesta del servidor:", respuesta);
  
        if (respuesta && respuesta.respuesta === 1) {
          cambiarNombre({ campo: "", valido: null });
          cambiarEstado({ campo: "", valido: null });
          toast.success("Tipo de documento " + nombre.campo + " registrado correctamente", { // Cambiado de Rol a Tipo de documento
            duration: 4000,
          });
        } else {
          toast.error("Error al enviar el tipo de documento, revise los campos"); // Cambiado de Rol a Tipo de documento
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo registrar el tipo de documento"); // Cambiado de Rol a Tipo de documento
        console.error("Error en el servidor:", error);
      }
    } else {
      toast.error("Error al enviar el tipo de documento, revise los campos"); // Cambiado de Rol a Tipo de documento
      console.log("Error de validación de campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Registro de tipos de Documento
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {/* Input Nombre */}
        <InputRegistros
          estado={nombre}
          cambiarEstado={cambiarNombre}
          label="Tipo de documento"
          placeholder="CC"
          id="nombre"
          type="text"
          name="nombre"
          errorMsm="El nombre no debe contener números y máximo 20 caracteres"
          expRegular={expresiones.nombre}
          icon={
            <Files
            className={`${nombre.valido === "true" ? "opacity-100 text-exito" : nombre.valido === "false" ? "opacity-100 text-error" : nombre.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
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
          opciones={opciones}
          icon={
            <Orbit
            className={`${estado.valido === "true" ? "opacity-100 text-exito" : estado.valido === "false" ? "opacity-100 text-error" : estado.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
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

export default RegistroDocumentos;
