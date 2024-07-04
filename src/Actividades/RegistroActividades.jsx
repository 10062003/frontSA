import { toast } from "sonner";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputRegistros from "../components/ui/InputRegistros";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";
import { useState, useEffect } from "react";
import {
  BookUser,
  BarChart3,
  TextCursorInput,
  Orbit,
  AlignLeft,
  Component,
} from "lucide-react";
import ServiciosActividad from "./ServiciosActividad";
import ServiciosModulo from "../Modulo/ServiciosModulo";
import ServiciosEstados from "../Estados/ServicioEstados";

const RegistroActividad = () => {
  const servicioActividad = new ServiciosActividad();
  const servicioModulos = new ServiciosModulo();
  const servicioEstados = new ServiciosEstados();

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos, de 3 a 20.
    descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{10,100}$/, // Letras y espacios, pueden llevar acentos, de 10 a 100.
  };

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [descripcion, cambiarDescripcion] = useState({
    campo: "",
    valido: null,
  });
  const [estado, cambiarEstado] = useState({ campo: "", valido: null });
  const [modulo, cambiarModulo] = useState({ campo: "", valido: null });
  const [dataModulo, setDataModulo] = useState([]);
  const [dataEstados, setDataEstados] = useState([]);

  const validarCampo = (campo, expresion) => expresion.test(campo);

  const ObtenerDatosModulo = async () => {
    try {
      const respuesta = await servicioModulos.ListarModulos();
      if (respuesta.respuesta === 1) {
        setDataModulo(respuesta.listaModulos);
      } else {
        toast.error("Error al cargar los datos");
      }
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
  };

  const ObtenerDatosEstados = async () => {
    try {
      const respuesta = await servicioEstados.ListarEstados();
      if (respuesta.respuesta === 1) {
        setDataEstados(respuesta.listaEstado);
      } else {
        toast.error("Error al cargar los datos");
      }
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
  };

  useEffect(() => {
    ObtenerDatosModulo();
    ObtenerDatosEstados();
  }, []);

  const DatosModulo = dataModulo.map((estado) => ({
    campo: estado.mdsId,
    label: estado.mdsNombre,
    valido: null,
  }));

  const DatosEstados = dataEstados.map((estado) => ({
    campo: estado.mEstadoId,
    label: estado.mEtdEstado,
    valido: null,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const actividad = {
      atdNombre: nombre.campo,
      atdDescripcion: descripcion.campo,
      atdUltModificacion: new Date(),
      atdIdModulo: modulo.campo,
      atdIdEstado: estado.campo,
    };

    console.log("Nombre:", nombre.campo);
    console.log("Descripcion:", descripcion.campo);
    console.log("Estado:", estado.campo);
    console.log("Modulo:", modulo.campo);

    if (
      validarCampo(nombre.campo, expresiones.nombre) &&
      validarCampo(descripcion.campo, expresiones.descripcion) &&
      estado.campo &&
      modulo.campo
    ) {
      try {
        const respuesta = await servicioActividad.RegistrarActividad(actividad);
        console.log("Respuesta del servidor:", respuesta);

        if (respuesta && respuesta.respuesta === 1) {
          cambiarNombre({ campo: "", valido: null });
          cambiarDescripcion({ campo: "", valido: null });
          cambiarEstado({ campo: "", valido: null });
          cambiarModulo({ campo: "", valido: null });
          toast.success(
            "Actividad " + nombre.campo + " registrado correctamente",
            {
              duration: 4000,
            }
          );
        } else {
          toast.error("Error al enviar la actividad, revise los campos");
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo registrar la actividad");
        console.error("Error en el servidor:", error);
      }
    } else {
      toast.error("Error al enviar la actividad, revise los campos");
      console.log("Error de validación de campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Registro de actividades
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
            <TextCursorInput
              className={`${nombre.valido === "true" ? "opacity-100 text-exito" : nombre.valido === "false" ? "opacity-100 text-error" : nombre.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        />

        {/* Input Descripción */}
        <InputRegistros
          estado={descripcion}
          cambiarEstado={cambiarDescripcion}
          label="Descripcion"
          placeholder="Upa dedicada a la acuaponia y la agricultura"
          id="descripcion"
          type="text"
          name="descripcion"
          errorMsm="La descripción no puede contener caracteres especiales y un minimo de 10 caracteres"
          expRegular={expresiones.descripcion}
          icon={
            <AlignLeft
              className={`${descripcion.valido === "true" ? "opacity-100 text-exito" : descripcion.valido === "false" ? "opacity-100 text-error" : descripcion.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Select Modulo */}
        <SeleccionConValidacion
          label="Modulo"
          name="modulo"
          errorMsm="Este campo es requerido"
          estado={modulo}
          cambiarEstado={cambiarModulo}
          opciones={DatosModulo}
          icon={
            <Component
              className={`${estado.valido === "true" ? "opacity-100 text-exito" : estado.valido === "false" ? "opacity-100 text-error" : estado.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
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
    </main>
  );
};

export default RegistroActividad;
