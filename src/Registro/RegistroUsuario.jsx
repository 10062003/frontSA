import React, { useState } from "react";
import InputRegistros from "../components/ui/InputRegistros";
import {
  AtSign,
  BarChart3,
  CalendarDays,
  Component,
  Dock,
  Drama,
  FileText,
  GraduationCap,
  KeyRound,
  NotepadText,
  Orbit,
  User,
} from "lucide-react";
import ButtonBasic from "../components/ui/ButtonBasic";
import { Toaster } from "sonner";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";

const RegistroUsuario = () => {
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos, de 3 a 20.
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
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
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
              className={`${nombre.valido === "true" ? "opacity-100 text-exito" : nombre.valido === "false" ? "opacity-100 text-error" : nombre.valido === null ? "opacity-100 text-green-700 dark:text-green-600" : ""}`}
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
          placeholder="jperez@ucundinamarca.edu.co"
          id="correo"
          type="email"
          name="correo"
          errorMsm="El correo debe terminar en @ucundinamarca.edu.co"
          expRegular={expresiones.nombre}
          icon={
            <AtSign
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
            <KeyRound
              className={`${contraseña.valido === "true" ? "opacity-100 text-exito" : contraseña.valido === "false" ? "opacity-100 text-error" : contraseña.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Tipo de documento */}
        <SeleccionConValidacion
          label="Tipo de Documento"
          name="tipoDocumento"
          errorMsm="Este campo es requerido"
          estado={tipoDocumento}
          cambiarEstado={cambiarTipoDocumento}
          icon={
            <FileText
              className={`${tipoDocumento.valido === "true" ? "opacity-100 text-exito" : tipoDocumento.valido === "false" ? "opacity-100 text-error" : tipoDocumento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          opciones={[
            {
              campo: "Cedula de Ciudadania",
              label: "Cedula de Ciudadania",
            },
            {
              campo: "Tarjeta de Identidad",
            },
          ]}
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Input Numero de documento */}
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
            <FileText
              className={`${numeroDocumento.valido === "true" ? "opacity-100 text-exito" : numeroDocumento.valido === "false" ? "opacity-100 text-error" : numeroDocumento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Fecha de nacimiento */}
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
            <CalendarDays
              className={`${fechaNacimiento.valido === "true" ? "opacity-100 text-exito" : fechaNacimiento.valido === "false" ? "opacity-100 text-error" : fechaNacimiento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Módulo */}
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
          icon={
            <Component
              className={`${modulo.valido === "true" ? "opacity-100 text-exito" : modulo.valido === "false" ? "opacity-100 text-error" : modulo.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Input Profesión */}
        <SeleccionConValidacion
          label="Profesión"
          name="profesion"
          errorMsm="Este campo es requerido"
          estado={profesion}
          cambiarEstado={cambiarProfesion}
          opciones={[
            {
              campo: "Ingeniero",
            },
            {
              campo: "Abogado",
            },
            {
              campo: "Profesor",
            },
          ]}
          icon={
            <GraduationCap
              className={`${profesion.valido === "true" ? "opacity-100 text-exito" : profesion.valido === "false" ? "opacity-100 text-error" : profesion.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
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
              campo: "Estudiante",
            },
            {
              campo: "Docente",
            },
            {
              campo: "Administrativo",
            },
          ]}
          icon={
            <Dock
              className={`${rol.valido === "true" ? "opacity-100 text-exito" : rol.valido === "false" ? "opacity-100 text-error" : rol.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
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
          icon={
            <Orbit
              className={`${estado.valido === "true" ? "opacity-100 text-exito" : estado.valido === "false" ? "opacity-100 text-error" : estado.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
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
          icon={
            <NotepadText
              className={`${upa.valido === "true" ? "opacity-100 text-exito" : upa.valido === "false" ? "opacity-100 text-error" : upa.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></SeleccionConValidacion>

        {/* Botón de registro */}
        <div className="flex justify-center col-span-1 sm:col-span-2">
          <ButtonBasic
            className={"text-white bg-green-700 border-green-700 text-xl"}
          >
            Registrarse
          </ButtonBasic>
        </div>
      </form>
      <Toaster position="bottom-right" richColors />
    </main>
  );
};

export default RegistroUsuario;
