import { Toaster, toast } from "sonner";
import Button from "../components/ui/Button";
import InputRegistros from "../components/ui/InputRegistros";
import { AlignLeft, BookA, BookUser, Church, MapPin } from "lucide-react";
import { useState } from "react";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";
import ServiciosUpa from "./ServiciosUpa";

const RegistroUpa = () => {
  const servicioUpa = new ServiciosUpa();
  const expresiones = {
    titulo: /^.[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    descripcion: /^[a-zA-ZÀ-ÿ\s]{10,50}$/, // Letras y espacios, pueden llevar acentos.
    ubicacion: /^[a-zA-ZÀ-ÿ\s]{10,20}$/, // Letras y espacios, pueden llevar acentos.
    municipio: /^[a-zA-ZÀ-ÿ\s]{10,20}$/, // Letras y espacios, pueden llevar acentos.
  };

  const opciones = [
    {
      campo: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      label: "Activado",
      valido: null,
    },
    {
      campo: "1a9d5660-0fb2-4b3e-857f-a45e3d1a5dbd",
      label: "Desactivado",
      valido: null,
    },
  ];

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

  const handleSubmit = (e) => {
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

    //console.log(upa);
    const respuesta = servicioUpa.RegistrarUpa(upa);
    if (respuesta.respuesta === 1) {
      toast.success(respuesta.mensaje);
    } else {
      toast.error(respuesta.mensaje);
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold font-bold mb-11 text-green-800 text-7xl">
        Registro Upas
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5"
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
            <BookUser
              className={`${nombre.valido === "true" ? "opacity-100 text-exito" : nombre.valido === "false" ? "opacity-100 text-error" : nombre.valido === null ? "opacity-100 text-green-800" : ""}`}
            />
          }
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
          errorMsm="La descripcion no debe contener números, tiene un máximo 50 caracteres y un minimo de 10 caracteres"
          expRegular={expresiones.descripcion}
          icon={
            <AlignLeft
              className={`${descripcion.valido === "true" ? "opacity-100 text-exito" : descripcion.valido === "false" ? "opacity-100 text-error" : descripcion.valido === null ? "opacity-100 text-green-800" : ""}`}
            />
          }
        ></InputRegistros>

        {/* Input Ubicación */}
        <InputRegistros
          estado={ubicacion}
          cambiarEstado={cambiarUbicacion}
          label="Dirección"
          placeholder="Cundinamarca"
          id="ubicacion"
          type="text"
          name="ubicacion"
          errorMsm="La descripcion no debe contener números, tiene un máximo 50 caracteres y un minimo de 10 caracteres"
          expRegular={expresiones.ubicacion}
          icon={
            <MapPin
              className={`${ubicacion.valido === "true" ? "opacity-100 text-exito" : ubicacion.valido === "false" ? "opacity-100 text-error" : ubicacion.valido === null ? "opacity-100 text-green-800" : ""}`}
            />
          }
        ></InputRegistros>

        {/* Input Departamaento */}
        <InputRegistros
          estado={departamento}
          cambiarEstado={cambiarDepartamento}
          label="Departamento"
          placeholder="Cundinamarca"
          id="departamento"
          type="text"
          name="departamento"
          errorMsm="El nombre no debe contener números y máximo 20 caracteres"
          expRegular={expresiones.nombre}
          icon={
            <BookUser
              className={`${departamento.valido === "true" ? "opacity-100 text-exito" : departamento.valido === "false" ? "opacity-100 text-error" : departamento.valido === null ? "opacity-100 text-green-800" : ""}`}
            />
          }
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
          errorMsm="La descripcion no debe contener números, tiene un máximo 50 caracteres y un minimo de 10 caracteres"
          expRegular={expresiones.municipio}
          icon={
            <Church
              className={`${municipio.valido === "true" ? "opacity-100 text-exito" : municipio.valido === "false" ? "opacity-100 text-error" : municipio.valido === null ? "opacity-100 text-green-800" : ""}`}
            />
          }
        ></InputRegistros>

        <SeleccionConValidacion
          label="Estado"
          name="estado"
          errorMsm="Este campo es requerido"
          estado={estado}
          cambiarEstado={cambiarEstado}
          opciones={opciones}
        />

        <div className="flex text-xs flex-col col-span-2 sm:col-span-2 justify-center items-center">
          <label
            htmlFor="terminos"
            className="block p-2.5 min-h-2.5 cursor-pointer"
          >
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              className="mr-2.5 flex-col col-span-2"
            />
            Acepto los terminos y condiciones
          </label>
        </div>
        <div className="flex flex-col col-span-2 items-center">
          <Button
            children={"Registrar"}
            className={
              "sm:w-[30%] cursor-pointer hover:shadow-[3px_0px_30px_rgba(163,163,163,0.4)]"
            }
          />
        </div>
      </form>
      <Toaster richColors />
    </main>
  );
};

export default RegistroUpa;
