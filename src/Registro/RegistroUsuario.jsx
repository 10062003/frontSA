// Registro de usuario
// nombre
// apellido
// correo
// contraseña
// tipo de documento(Por seleccion)
// numero de documento
// fecha de nacimiento
// Modulo (por seleccion)
// profesion (por seleccion)
// rol (por seleccion)
// estado (por seleccion)
// upa (por seleccion)
// boton
import React, { useState } from "react";
import InputRegistros from "../components/ui/InputRegistros";
import { BookUser, User } from "lucide-react";
import Button from "../components/ui/Button";
import { Toaster } from "sonner";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";

const RegistroUsuario = () => {
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos, de 3 a 20.
    // descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{10,100}$/, // Letras y espacios, pueden llevar acentos, de 10 a 50.
    // ubicacion: /^[a-zA-Z0-9\s.,#-]{5,100}$/, // Letras y espacios, pueden llevar acentos, de 5 a 100.
    // departamento: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos, de 4 a 20.
    // municipio: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos, de 4 a 20.
  };

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [contraseña, cambiarContraseña] = useState({ campo: "", valido: null });
  const [tipoDocumento, cambiarTipoDocumento] = useState({
    campo: "",
    valido: null,
  });
  const [numeroDocumento, cambiarNumeroDocumento] = useState({
    campo: "",
    valido: null,
  });
  const [fechaNacimiento, cambiarFechaNacimiento] = useState({
    campo: "",
    valido: null,
  });
  const [modulo, cambiarModulo] = useState({ campo: "", valido: null });
  const [profesion, cambiarProfesion] = useState({ campo: "", valido: null });
  const [rol, cambiarRol] = useState({ campo: "", valido: null });
  const [estado, cambiarEstado] = useState({ campo: "", valido: null });
  const [upa, cambiarUpa] = useState({ campo: "", valido: null });

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold font-bold mb-11 text-green-800 text-7xl dark:text-green-500">
        Registro Usuarios
      </p>
      <form
        //onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {/* Input Nombre */}
        <InputRegistros
          estado={nombre}
          cambiarEstado={cambiarNombre}
          label="Nombre"
          placeholder="Juan"
          id="nombre"
          type="text"
          name="nombre"
          errorMsm="El nombre no debe contener números y máximo 20 caracteres"
          expRegular={expresiones.nombre}
          icon={
            <User
              className={`${nombre.valido === "true" ? "opacity-100 text-exito" : nombre.valido === "false" ? "opacity-100 text-error" : nombre.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Apellido */}
        <InputRegistros
          estado={apellido}
          cambiarEstado={cambiarApellido}
          label="Apellido"
          placeholder="Perez"
          id="apellido"
          type="text"
          name="apellido"
          errorMsm="El apellido no debe contener números y máximo 20 caracteres"
          expRegular={expresiones.nombre}
          icon={
            <User
              className={`${apellido.valido === "true" ? "opacity-100 text-exito" : apellido.valido === "false" ? "opacity-100 text-error" : apellido.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Correo */}
        <InputRegistros
          estado={correo}
          cambiarEstado={cambiarCorreo}
          label="Correo"
          placeholder="jPerez@ucundinamarca.edu.co"
          id="correo"
          type="email"
          name="correo"
          errorMsm="El correo debe terminar en @ucundinamarca.edu.co"
          expRegular={expresiones.nombre}
          icon={
            <User
              className={`${correo.valido === "true" ? "opacity-100 text-exito" : correo.valido === "false" ? "opacity-100 text-error" : correo.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Contraseña */}
        <InputRegistros
          estado={contraseña}
          cambiarEstado={cambiarContraseña}
          label="Contraseña"
          placeholder="********"
          id="contraseña"
          type="password"
          name="contraseña"
          errorMsm="La contraseña debe tener mínimo 8 caracteres y puede contener letras, números y caracteres especiales"
          expRegular={expresiones.nombre}
          icon={
            <User
              className={`${contraseña.valido === "true" ? "opacity-100 text-exito" : contraseña.valido === "false" ? "opacity-100 text-error" : contraseña.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Tipo de Documento */}
        <SeleccionConValidacion
          label="Tipo de Documento"
          name="tipoDocumento"
          errorMsm="Este campo es requerido"
          estado={tipoDocumento}
          cambiarEstado={cambiarTipoDocumento}
          icon={
            <BookUser
              className={`${nombre.valido === "true" ? "opacity-100 text-exito" : nombre.valido === "false" ? "opacity-100 text-error" : nombre.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          opciones={[
            {
              campo: "Cedula de Ciudadania",
            },
            {
              campo: "Tarjeta de Identidad",
            },
          ]}
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Input Numero de Documento */}
        <InputRegistros
          estado={numeroDocumento}
          cambiarEstado={cambiarNumeroDocumento}
          label="Numero de Documento"
          placeholder="1234567890"
          id="numeroDocumento"
          type="text"
          name="numeroDocumento"
          errorMsm="El número de documento debe ser un número"
          expRegular={expresiones.nombre}
          icon={
            <User
              className={`${numeroDocumento.valido === "true" ? "opacity-100 text-exito" : numeroDocumento.valido === "false" ? "opacity-100 text-error" : numeroDocumento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Fecha de Nacimiento */}
        <InputRegistros
          estado={fechaNacimiento}
          cambiarEstado={cambiarFechaNacimiento}
          label="Fecha de Nacimiento"
          placeholder="DD/MM/AAAA"
          id="fechaNacimiento"
          type="date"
          name="fechaNacimiento"
          errorMsm="La fecha de nacimiento debe ser una fecha"
          expRegular={expresiones.nombre}
          icon={
            <User
              className={`${fechaNacimiento.valido === "true" ? "opacity-100 text-exito" : fechaNacimiento.valido === "false" ? "opacity-100 text-error" : fechaNacimiento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Modulo */}
        <SeleccionConValidacion
          label="Modulo"
          name="modulo"
          errorMsm="Este campo es requerido"
          estado={modulo}
          cambiarEstado={cambiarModulo}
          opciones={[
            {
              campo: "Modulo 1",
            },
            {
              campo: "Modulo 2",
            },
            {
              campo: "Modulo 3",
            },
          ]}
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Input Profesion */}
        <SeleccionConValidacion
          label="Profesion"
          name="profesion"
          errorMsm="Este campo es requerido"
          estado={profesion}
          cambiarEstado={cambiarProfesion}
          opciones={[
            {
              campo: "Ingeniero de Sistemas",
            },
            {
              campo: "Ingeniero Industrial",
            },
            {
              campo: "Ingeniero Ambiental",
            },
          ]}
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Input Rol */}
        <SeleccionConValidacion
          label="Rol"
          name="rol"
          errorMsm="Este campo es requerido"
          estado={rol}
          cambiarEstado={cambiarRol}
          opciones={[
            {
              campo: "Administrador",
            },
            {
              campo: "Usuario",
            },
          ]}
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Input Estado */}
        <SeleccionConValidacion
          label="Estado"
          name="estado"
          errorMsm="Este campo es requerido"
          estado={estado}
          cambiarEstado={cambiarEstado}
          opciones={[
            {
              campo: "Activo",
            },
            {
              campo: "Inactivo",
            },
          ]}
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Input UPA */}
        <SeleccionConValidacion
          label="UPA"
          name="upa"
          errorMsm="Este campo es requerido"
          estado={upa}
          cambiarEstado={cambiarUpa}
          opciones={[
            {
              campo: "UPA 1",
            },
            {
              campo: "UPA 2",
            },
            {
              campo: "UPA 3",
            },
          ]}
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Boton Registrar */}
        <div className="flex flex-col col-span-1 sm:col-span-2 items-center">
          <Button
            children={"Registrar"}
            className={
              "sm:w-[30%] cursor-pointer text-white hover:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] hover:bg-green-700"
            }
          />
        </div>
      </form>
      <Toaster richColors closeButton />
    </main>
  );
};

export default RegistroUsuario;
