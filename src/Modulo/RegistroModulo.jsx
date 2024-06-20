import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputRegistros from "../components/ui/InputRegistros";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";
import { TextCursorInput, Orbit } from "lucide-react";
import ServiciosModulo from "./ServiciosModulo";
import ServiciosEstados from "../Estados/ServicioEstados";

const RegistroModulo = () => {
  const servicioModulo = new ServiciosModulo();
  const servicioEstados = new ServiciosEstados();
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{10,100}$/,
  };

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [descripcion, cambiarDescripcion] = useState({
    campo: "",
    valido: null,
  });
  const [estado, cambiarEstado] = useState({ campo: "", valido: null });

  const validarCampo = (campo, expresion) => expresion.test(campo);
  const [dataEstados, setDataEstados] = useState([]);
  const [loading, setLoading] = useState(true);

  const ObtenerDatosEstados = async () => {
    try {
      const respuesta = await servicioEstados.ListarEstados();
      //console.log(respuesta.listaEstados);
      if (respuesta.respuesta === 1) {
        setDataEstados(respuesta.listaEstados);
      } else {
        toast.error("Error al cargar los datos");
      }
      setLoading(false);
    } catch (error) {
      //console.error("Error al obtener los datos:", error);
      toast.error("Error al cargar los datos");
      setLoading(false);
    }
  };

  useEffect(() => {
    ObtenerDatosEstados();
  }, []);

  //Verificar que los datos se estén actualizando
  // useEffect(() => {
  //   console.log("Data Estados actualizado:", dataEstados);
  // }, [dataEstados]);

  // Dar formato a los datos de los estados para el select
  const DatosEstados = dataEstados.map((estado) => ({
    campo: estado.mEstadoId,
    label: estado.mEtdEstado,
    valido: null,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const modulo = {
      mdsNombre: nombre.campo,
      mdsDescripcion: descripcion.campo,
      mdsultModificacion: new Date(),
      mdsIdEstado: estado.campo,
    };

    if (
      validarCampo(nombre.campo, expresiones.nombre) &&
      validarCampo(descripcion.campo, expresiones.descripcion) &&
      estado.campo
    ) {
      try {
        const respuesta = await servicioModulo.RegistrarModulo(modulo);
        console.log("Respuesta del servidor:", respuesta);

        if (respuesta && respuesta.respuesta === 1) {
          cambiarNombre({ campo: "", valido: null });
          cambiarDescripcion({ campo: "", valido: null });
          cambiarEstado({ campo: "", valido: null });
          toast.success(`Módulo ${nombre.campo} registrado correctamente`, {
            duration: 4000,
          });
        } else {
          toast.error("Error al enviar el módulo, revise los campos");
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo registrar el módulo");
        console.error("Error en el servidor:", error);
      }
    } else {
      toast.error("Error al enviar el módulo, revise los campos");
      console.log("Error de validación de campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Registro de módulo
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
          placeholder="Módulo web Super Administrador"
          id="nombre"
          type="text"
          name="nombre"
          errorMsm="El nombre no debe contener números y máximo 20 caracteres"
          expRegular={expresiones.nombre}
          icon={
            <TextCursorInput
              className={`${
                nombre.valido === "true"
                  ? "opacity-100 text-exito"
                  : nombre.valido === "false"
                    ? "opacity-100 text-error"
                    : nombre.valido === null
                      ? "opacity-100 text-green-800 dark:text-green-600"
                      : ""
              }`}
            />
          }
          className="col-span-1 sm:col-span-2"
        />

        {/* Input Descripción */}
        <InputRegistros
          estado={descripcion}
          cambiarEstado={cambiarDescripcion}
          label="Descripción"
          placeholder="Módulo de administración de usuarios"
          id="descripcion"
          type="text"
          name="descripcion"
          errorMsm="La descripción debe contener mínimo 10 caracteres"
          expRegular={expresiones.descripcion}
          icon={
            <TextCursorInput
              className={`${
                descripcion.valido === "true"
                  ? "opacity-100 text-exito"
                  : descripcion.valido === "false"
                    ? "opacity-100 text-error"
                    : descripcion.valido === null
                      ? "opacity-100 text-green-800 dark:text-green-600"
                      : ""
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
          opciones={DatosEstados}
          icon={
            <Orbit
              className={`${
                estado.valido === "true"
                  ? "opacity-100 text-exito"
                  : estado.valido === "false"
                    ? "opacity-100 text-error"
                    : estado.valido === null
                      ? "opacity-100 text-green-800 dark:text-green-600"
                      : ""
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

export default RegistroModulo;
