import { toast } from "sonner";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputRegistros from "../components/ui/InputRegistros";
import {
  AlignLeft,
  BarChart3,
  BookUser,
  Church,
  MapPin,
  Map,
  Orbit,
  TextCursorInput,
} from "lucide-react";
import { useState, useEffect } from "react";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";
import ServiciosUpa from "./ServiciosUpa";
import ServiciosEstados from "../Estados/ServicioEstados";

const RegistroUpa = () => {
  const servicioUpa = new ServiciosUpa();
  const servicioEstados = new ServiciosEstados();

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos, de 3 a 20.
    descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{10,100}$/, // Letras y espacios, pueden llevar acentos, de 10 a 100.
    ubicacion: /^[a-zA-Z0-9\s.,#-]{5,100}$/, // Letras y espacios, pueden llevar acentos, de 5 a 100.
    departamento: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos, de 4 a 20.
    municipio: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos, de 4 a 20.
  };

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [descripcion, cambiarDescripcion] = useState({
    campo: "",
    valido: null,
  });
  const [ubicacion, cambiarUbicacion] = useState({ campo: "", valido: null });
  const [estado, cambiarEstado] = useState({ campo: "", valido: null });
  const [municipio, cambiarMunicipio] = useState({ campo: "", valido: null });
  const [departamento, cambiarDepartamento] = useState({
    campo: "",
    valido: null,
  });
  const [dataEstados, setDataEstados] = useState([]);

  const validarCampo = (campo, expresion) => {
    if (expresion.test(campo)) {
      return "true";
    } else {
      return "false";
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
    ObtenerDatosEstados();
  }, []);

  const DatosEstados = dataEstados.map((estado) => ({
    campo: estado.mEstadoId,
    label: estado.mEtdEstado,
    valido: null,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const upa = {
      upsNombre: nombre.campo,
      upsDescipcion: descripcion.campo,
      upsUbicacion: ubicacion.campo,
      upsIdEstado: estado.campo,
      upsCreacionUpa: new Date(),
      upsCiudad: municipio.campo,
      upsDepartamento: departamento.campo,
    };

    if (
      nombre.valido === "true" &&
      descripcion.valido === "true" &&
      ubicacion.valido === "true" &&
      estado.valido === "true" &&
      municipio.valido === "true" &&
      departamento.valido === "true"
    ) {
      try {
        const respuesta = await servicioUpa.RegistrarUpa(upa);
        if (respuesta.respuesta === 1) {
          cambiarNombre({ campo: "", valido: null });
          cambiarDescripcion({ campo: "", valido: null });
          cambiarUbicacion({ campo: "", valido: null });
          cambiarEstado({ campo: "", valido: null });
          cambiarMunicipio({ campo: "", valido: null });
          cambiarDepartamento({ campo: "", valido: null });
          toast.success("Upa " + nombre.campo + " registrada correctamente", {
            duration: 4000,
          });
        } else {
          toast.error("Error al enviar la Upa, revise los campos");
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo registrar la Upa");
      }
    } else {
      toast.error("Error al enviar la Upa, revise los campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Registro Upas
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {/* Input Nombre */}
        <InputRegistros
          estado={nombre}
          cambiarEstado={cambiarNombre}
          label="Nombre"
          placeholder="UpaLestoma"
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
        ></InputRegistros>

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

        {/* Input Ubicación */}
        <InputRegistros
          estado={ubicacion}
          cambiarEstado={cambiarUbicacion}
          label="Dirección"
          placeholder="Calle 13 #21-37"
          id="ubicacion"
          type="text"
          name="ubicacion"
          errorMsm="Solo puede tener caracteres como #, -, ."
          expRegular={expresiones.ubicacion}
          icon={
            <MapPin
              className={`${ubicacion.valido === "true" ? "opacity-100 text-exito" : ubicacion.valido === "false" ? "opacity-100 text-error" : ubicacion.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Departamento */}
        <InputRegistros
          estado={departamento}
          cambiarEstado={cambiarDepartamento}
          label="Departamento"
          placeholder="Cundinamarca"
          id="departamento"
          type="text"
          name="departamento"
          errorMsm="No debe contener números y un máximo de 20 caracteres"
          expRegular={expresiones.departamento}
          icon={
            <Map
              className={`${departamento.valido === "true" ? "opacity-100 text-exito" : departamento.valido === "false" ? "opacity-100 text-error" : departamento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Municipio */}
        <InputRegistros
          estado={municipio}
          cambiarEstado={cambiarMunicipio}
          label="Municipio"
          placeholder="Facatativá"
          id="municipio"
          type="text"
          name="municipio"
          errorMsm="La descripcion no debe contener números y máximo 20 caracteres"
          expRegular={expresiones.municipio}
          icon={
            <Church
              className={`${municipio.valido === "true" ? "opacity-100 text-exito" : municipio.valido === "false" ? "opacity-100 text-error" : municipio.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Estado */}
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
        ></SeleccionConValidacion>

        {/* Boton Registrar */}
        <div className="flex flex-col col-span-1 sm:col-span-2 items-center">
          <ButtonBasic
            children={"Registrar"}
            className={
              "sm:w-[30%] cursor-pointer text-white hover:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] bg-green-700 border-green-700 text-xl"
            }
          />
        </div>
      </form>
    </main>
  );
};

export default RegistroUpa;
