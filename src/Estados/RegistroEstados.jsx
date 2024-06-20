import { Toaster, toast } from "sonner";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputRegistros from "../components/ui/InputRegistros";
import { useState } from "react";
import { Orbit } from "lucide-react";
import ServiciosEstados from "./ServicioEstados";

const RegistroEstados = () => {
  const servicioEstados = new ServiciosEstados();
  const expresiones = {
    estado: /^[a-zA-ZÀ-ÿ\s]{3,30}$/,
  };

  const [estados, cambiarEstados] = useState({ campo: "", valido: null });

  const validarCampo = (campo, expresion) => expresion.test(campo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const estado = {
      etdEstado: estados.campo,
    };

    if (validarCampo(estados.campo, expresiones.estado)) {
      try {
        const respuesta = await servicioEstados.RegistrarEstado(estado);
        console.log("Respuesta del servidor:", respuesta);

        if (respuesta && respuesta.respuesta === 1) {
          cambiarEstados({ campo: "", valido: null });
          toast.success(
            "Estado " + estados.campo + " registrado correctamente",
            {
              duration: 4000,
            }
          );
        } else {
          toast.error("Error al enviar el estado, revise los campos");
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo registrar el estado");
        console.error("Error en el servidor:", error);
      }
    } else {
      toast.error("Error al enviar el estado, revise los campos");
      console.log("Error de validación de campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Registro de estados
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
        {/* Input Estados */}
        <InputRegistros
          estado={estados}
          cambiarEstado={cambiarEstados} // Aquí se pasa la función cambiarEstados
          label="Estados"
          placeholder="En espera"
          id="estado"
          type="text"
          name="estado"
          errorMsm="El estado no debe contener números y máximo 20 caracteres"
          expRegular={expresiones.estado}
          icon={
            <Orbit
              className={`${estados.valido === "true" ? "opacity-100 text-exito" : estados.valido === "false" ? "opacity-100 text-error" : estados.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
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

export default RegistroEstados;
