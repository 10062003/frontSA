import React, { useState, useEffect } from "react";
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
import { toast } from "sonner";
import SeleccionConValidacion from "../components/ui/SeleccionConValidacion";
import ServiciosUsuario from "./ServiciosRegUsuario";
import ServiciosEstados from "../Estados/ServicioEstados";
import ServiciosDocumentos from "../Documentos/ServiciosDocumentos";
import ServiciosModulo from "../Modulo/ServiciosModulo";
import ServiciosProfesion from "../Profesion/ServiciosProfesion";
import ServiciosRoles from "../Roles/ServiciosRoles";
import ServiciosUpa from "../Upas/ServiciosUpa";

const RegistroUsuario = () => {
  const servicioUsuario = new ServiciosUsuario();
  const servicioTipoDocumento = new ServiciosDocumentos();
  const servicioModulos = new ServiciosModulo();
  const servicioEstados = new ServiciosEstados();
  const servicioProfesion = new ServiciosProfesion();
  const ServicioRoles = new ServiciosRoles();
  const ServicioUpa = new ServiciosUpa();

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos, de 3 a 20.
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos, de 3 a 20.
    correo: /^[a-zA-Z0-9._%+-]+@ucundinamarca\.edu\.co$/, // Email: caracteres, arroba, dominio, punto y dominio
    contraseña: /^[a-zA-Z0-9_.+-]{8,20}$/, // 8 o más caracteres.
    documento: /^\d{7,10}$/, // 1 a 10 números.
    fecha: /^\d{4}-\d{2}-\d{2}$/,
  };

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  // const [contraseña, cambiarContraseña] = useState({ campo: "", valido: null });
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
  const [dataEstados, setDataEstados] = useState([]);
  const [dataTipoDocumento, setDataTipoDocumento] = useState([]);
  const [dataModulo, setDataModulo] = useState([]);
  const [dataProfesion, setDataProfesion] = useState([]);
  const [dataRoles, setDataRoles] = useState([]);
  const [dataUpa, setDataUpa] = useState([]);

  const validarCampo = (campo, expresion) => expresion.test(campo);

  const ObtenerDatosTipoDoc = async () => {
    try {
      const respuesta = await servicioTipoDocumento.ListarDocumentos();
      if (respuesta.respuesta === 1) {
        setDataTipoDocumento(respuesta.listaDocumentos);
      } else {
        toast.error("Error al cargar los datos");
      }
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
  };

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

  const ObtenerDatosProfesion = async () => {
    try {
      const respuesta = await servicioProfesion.ListarProfesiones();
      if (respuesta.respuesta === 1) {
        setDataProfesion(respuesta.listaProfesiones);
      } else {
        toast.error("Error al cargar los datos");
      }
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
  };

  const ObtenerDatosRoles = async () => {
    try {
      const respuesta = await ServicioRoles.ListarRoles();
      if (respuesta.respuesta === 1) {
        setDataRoles(respuesta.listaRoles);
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

  const ObtenerDatosUpa = async () => {
    try {
      const respuesta = await ServicioUpa.ListarUpas();
      if (respuesta.respuesta === 1) {
        setDataUpa(respuesta.listaUpas);
      } else {
        toast.error("Error al cargar los datos");
      }
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
  };

  useEffect(() => {
    ObtenerDatosTipoDoc();
    ObtenerDatosModulo();
    ObtenerDatosProfesion();
    ObtenerDatosRoles();
    ObtenerDatosEstados();
    ObtenerDatosUpa();
  }, []);

  // Dar formato a los datos de los estados para el select
  const DatosTipoDoc = dataTipoDocumento.map((estado) => ({
    campo: estado.mTdocId,
    label: estado.mTdocTipoDocumento,
    valido: null,
  }));

  const DatosModulo = dataModulo.map((estado) => ({
    campo: estado.mdsId,
    label: estado.mdsNombre,
    valido: null,
  }));

  const DatosProfesion = dataProfesion.map((estado) => ({
    campo: estado.mPfsId,
    label: estado.mPfsProfesion,
    valido: null,
  }));

  const DatosRoles = dataRoles.map((estado) => ({
    campo: estado.mRolId,
    label: estado.mRolNombre,
    valido: null,
  }));

  const DatosEstados = dataEstados.map((estado) => ({
    campo: estado.mEstadoId,
    label: estado.mEtdEstado,
    valido: null,
  }));

  const DatosUpa = dataUpa.map((estado) => ({
    campo: estado.mlUpsId,
    label: estado.mlUpsNombre,
    valido: null,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = {
      usrNombre: nombre.campo,
      usrApellido: apellido.campo,
      usrCorreo: correo.campo,
      // usrContrasenna: contraseña.campo,
      usrIdTipoDocumento: tipoDocumento.campo,
      usrNumeroDocumento: numeroDocumento.campo,
      usrFechaNacimiento: fechaNacimiento.campo,
      usrUltimaModificacion: new Date(),
      usrFechaIngreso: new Date(),
      usrModulo: modulo.campo,
      usrIdProfesion: profesion.campo,
      usrIdRol: rol.campo,
      usrIdEstado: estado.campo,
      usrIdUpa: upa.campo,
      usrdtVencimientoCodigo: new Date(),
    };

    if (
      validarCampo(nombre.campo, expresiones.nombre) &&
      validarCampo(apellido.campo, expresiones.apellido) &&
      validarCampo(correo.campo, expresiones.correo) &&
      // validarCampo(contraseña.campo, expresiones.contraseña) &&
      tipoDocumento.campo &&
      validarCampo(numeroDocumento.campo, expresiones.documento) &&
      validarCampo(fechaNacimiento.campo, expresiones.fecha) &&
      modulo.campo &&
      profesion.campo &&
      rol.campo &&
      estado.campo &&
      upa.campo
    ) {
      try {
        const respuesta = await servicioUsuario.RegistrarUsuario(usuario);
        console.log("Respuesta del servidor:", respuesta);

        if (respuesta && respuesta.respuesta === 1) {
          cambiarNombre({ campo: "", valido: null });
          cambiarApellido({ campo: "", valido: null });
          cambiarCorreo({ campo: "", valido: null });
          // cambiarContraseña({ campo: "", valido: null });
          cambiarTipoDocumento({ campo: "", valido: null });
          cambiarNumeroDocumento({ campo: "", valido: null });
          cambiarFechaNacimiento({ campo: "", valido: null });
          cambiarModulo({ campo: "", valido: null });
          cambiarProfesion({ campo: "", valido: null });
          cambiarRol({ campo: "", valido: null });
          cambiarEstado({ campo: "", valido: null });
          cambiarUpa({ campo: "", valido: null });
          toast.success(
            "Usuario " +
              nombre.campo +
              " Registrado correctamente, por favor revisar el correo para ver la contraseña temporal",
            {
              duration: 4000,
            }
          );
        } else {
          toast.error("Error al enviar el usuario, revise los campos");
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo registrar el usuario");
        console.error("Error en el servidor:", error);
      }
    } else {
      toast.error("Error al enviar el usuario, revise los campos 123");
      console.log("Error de validación de campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Registro Usuarios
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
          expRegular={expresiones.apellido}
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
          expRegular={expresiones.correo}
          icon={
            <AtSign
              className={`${correo.valido === "true" ? "opacity-100 text-exito" : correo.valido === "false" ? "opacity-100 text-error" : correo.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros>

        {/* Input Contraseña */}
        {/* <InputRegistros
          estado={contraseña}
          cambiarEstado={cambiarContraseña}
          label="Contraseña"
          placeholder="********"
          id="contraseña"
          type="password"
          name="contraseña"
          errorMsm="La contraseña debe tener mínimo 8 caracteres y puede contener letras, números y caracteres especiales"
          expRegular={expresiones.contraseña}
          icon={
            <KeyRound
              className={`${contraseña.valido === "true" ? "opacity-100 text-exito" : contraseña.valido === "false" ? "opacity-100 text-error" : contraseña.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}
            />
          }
          className="col-span-1 sm:col-span-2"
        ></InputRegistros> */}

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
          opciones={DatosTipoDoc}
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
          errorMsm="El número de documento debe ser un número de mínimo 7 caracteres"
          expRegular={expresiones.documento}
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
          expRegular={expresiones.fecha}
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
          opciones={DatosModulo}
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
          opciones={DatosProfesion}
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
          opciones={DatosRoles}
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
          opciones={DatosEstados}
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
          opciones={DatosUpa}
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
            Registrar Usuario
          </ButtonBasic>
        </div>
      </form>
    </main>
  );
};

export default RegistroUsuario;
