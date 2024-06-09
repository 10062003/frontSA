import { Toaster, toast } from "sonner";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputRegistros from "../components/ui/InputRegistros";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";
import ServiciosRoles from "./ServiciosRoles";
import { useState } from "react";
import { BookUser, BarChart3 } from "lucide-react";

const RegistroRol = () => {
  const servicioRol = new ServiciosRoles();
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos, de 3 a 20.
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
  
    const rol = {
      rolNombre: nombre.campo,
      rolIdEstado: estado.campo
    };
  
    console.log("Nombre:", nombre.campo);
    console.log("Estado:", estado.campo);
  
    if (validarCampo(nombre.campo, expresiones.nombre) && estado.campo) {
      try {
        const respuesta = await servicioRol.RegistrarRol(rol);
        console.log("Respuesta del servidor:", respuesta);
  
        if (respuesta && respuesta.respuesta === 1) {
          cambiarNombre({ campo: "", valido: null });
          cambiarEstado({ campo: "", valido: null });
          toast.success("Rol " + nombre.campo + " registrado correctamente", {
            duration: 4000,
          });
        } else {
          toast.error("Error al enviar el rol, revise los campos");
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo registrar el rol");
        console.error("Error en el servidor:", error);
      }
    } else {
      toast.error("Error al enviar el rol, revise los campos");
      console.log("Error de validación de campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Registro Roles
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {/* Input Nombre */}
        <InputRegistros
          estado={nombre}
          cambiarEstado={cambiarNombre}
          label="Nombre del rol"
          placeholder="Administrador"
          id="nombre"
          type="text"
          name="nombre"
          errorMsm="El nombre no debe contener números y máximo 20 caracteres"
          expRegular={expresiones.nombre}
          icon={
            <BookUser
              className={`${
                nombre.valido ? "text-exito" : "text-error"
              }`}
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
            <BarChart3
              className={`${
                estado.valido ? "text-exito" : "text-error"
              }`}
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

export default RegistroRol;
