import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import ButtonBasic from "../../components/ui/ButtonBasic";
import InputRegistros from "../../components/ui/InputRegistros";
import SeleccionConValidacion from "../../components/ui/SeleccionConValidacion";
import ServiciosNuevoTicket from "./ServiciosNuevoTicket";
import ServiciosModulo from "../../Modulo/ServiciosModulo";
import ServiciosProfesion from "../../Profesion/ServiciosProfesion";
import ServiciosDocumentos from "../../Documentos/ServiciosDocumentos";


import {
  User,
  Mail,
  Calendar,
  Fingerprint,
  Layers,
  Briefcase,
  Shield,
  Building,
  List,
  ScanEye,
  FileText,
} from "lucide-react";

const RegistroNuevoTicket = () => {
  const servicioProfesion = new ServiciosProfesion();
  const servicioModulos = new ServiciosModulo();
  const servicioTicket = new ServiciosNuevoTicket();
  const servicioTipoDocumento = new ServiciosDocumentos();
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,30}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeroDocumento: /^\d{8,15}$/,
    descripcion: /^.{1,250}$/,
  };

  const opcionesTipoTicket = [
    { campo: "tipo1", label: "Tipo 1" },
    { campo: "tipo2", label: "Tipo 2" },
    { campo: "tipo3", label: "Tipo 3" },
  ];
  
  const opcionesEstado = [
    { campo: "3fa85f64-5717-4562-b3fc-2c963f66afa6", label: "Activado" },
    { campo: "1a9d5660-0fb2-4b3e-857f-a45e3d1a5dbd", label: "Desactivado" },
  ];

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [tipoDocumento, cambiarTipoDocumento] = useState({ campo: "", valido: null });
  const [numeroDocumento, cambiarNumeroDocumento] = useState({ campo: "", valido: null });
  const [fechaNacimiento, cambiarFechaNacimiento] = useState({ campo: "", valido: null });
  const [modulo, cambiarModulo] = useState({ campo: "", valido: null });
  const [profesion, cambiarProfesion] = useState({ campo: "", valido: null });
  const [rol, cambiarRol] = useState({ campo: "", valido: null });
  const [upa, cambiarUpa] = useState({ campo: "", valido: null });
  const [tipoTicket, cambiarTipoTicket] = useState({ campo: "", valido: null });
  const [estadoTicket, cambiarEstadoTicket] = useState({ campo: "", valido: null });
  const [soporteTicket, cambiarSoporteTicket] = useState({ campo: "", valido: null });
  const [descripcion, cambiarDescripcion] = useState({ campo: "", valido: null });
  const [dataModulo, setDataModulo] = useState([]);
  const [dataProfesion, setDataProfesion] = useState([]);
  const [dataTipoDocumento, setDataTipoDocumento] = useState([]);

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

  useEffect(() => {
    ObtenerDatosModulo();
    ObtenerDatosProfesion();
    ObtenerDatosTipoDoc();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ticket = {
      TNombre: nombre.campo,
      TApellido: apellido.campo,
      TCorreo: correo.campo,
      TTipoDocumento: tipoDocumento.campo,
      TNumeroDocumento: numeroDocumento.campo,
      TFechaNacimiento: fechaNacimiento.campo,
      TIdModulo: modulo.campo,
      TIdProfesion: profesion.campo,
      TIdRol: rol.campo,
      TIdUpa: upa.campo,
      TUsuarioSolicitante: usuarioSolicitante.campo,
      TIdTipoTickets: tipoTicket.campo,
      TIdEstadoTicket: estadoTicket.campo,
      TSoporteTicket: soporteTicket.campo,
      TActDescripcion: descripcion.campo,
    };

    if (
      validarCampo(nombre.campo, expresiones.nombre) &&
      validarCampo(correo.campo, expresiones.correo) &&
      validarCampo(numeroDocumento.campo, expresiones.numeroDocumento) &&
      validarCampo(descripcion.campo, expresiones.descripcion)
    ) {
      try {
        const respuesta = await servicioTicket.RegistrarNuevoTicket(ticket);
        console.log("Respuesta del servidor:", respuesta);

        if (respuesta && respuesta.respuesta === 1) {
          cambiarNombre({ campo: "", valido: null });
          cambiarApellido({ campo: "", valido: null });
          cambiarCorreo({ campo: "", valido: null });
          cambiarTipoDocumento({ campo: "", valido: null });
          cambiarNumeroDocumento({ campo: "", valido: null });
          cambiarFechaNacimiento({ campo: "", valido: null });
          cambiarModulo({ campo: "", valido: null });
          cambiarProfesion({ campo: "", valido: null });
          cambiarRol({ campo: "", valido: null });
          cambiarUpa({ campo: "", valido: null });
          cambiarUsuarioSolicitante({ campo: "", valido: null });
          cambiarTipoTicket({ campo: "", valido: null });
          cambiarEstadoTicket({ campo: "", valido: null });
          cambiarSoporteTicket({ campo: "", valido: null });
          cambiarDescripcion({ campo: "", valido: null });
          toast.success("Ticket registrado correctamente", { duration: 4000 });
        } else {
          toast.error("Error al enviar el ticket, revise los campos");
        }
      } catch (error) {
        toast.error("Error de servidor: no se pudo registrar el ticket");
        console.error("Error en el servidor:", error);
      }
    } else {
      toast.error("Error al enviar el ticket, revise los campos");
      console.log("Error de validación de campos");
    }
  };

  return (
    <main className="max-w-4xl w-11/12 m-auto p-10">
      <p className="flex justify-center text-bold text-center font-bold mb-11 text-green-700 text-7xl dark:text-green-500">
        Registro de Nuevo Ticket
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <InputRegistros
          estado={nombre}
          cambiarEstado={cambiarNombre}
          label="Nombre"
          placeholder="Juan"
          id="nombre"
          type="text"
          name="nombre"
          errorMsm="El nombre no debe contener números y máximo 30 caracteres"
          expRegular={expresiones.nombre}
          icon={<User className={`${nombre.valido === "true" ? "opacity-100 text-exito" : nombre.valido === "false" ? "opacity-100 text-error" : nombre.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <InputRegistros
          estado={apellido}
          cambiarEstado={cambiarApellido}
          label="Apellido"
          placeholder="Perez"
          id="apellido"
          type="text"
          name="apellido"
          errorMsm="El apellido no debe contener números y máximo 30 caracteres"
          expRegular={expresiones.nombre}
          icon={<User className={`${apellido.valido === "true" ? "opacity-100 text-exito" : apellido.valido === "false" ? "opacity-100 text-error" : apellido.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`} />}
          className="col-span-1"
        />
        <InputRegistros
          estado={correo}
          cambiarEstado={cambiarCorreo}
          label="Correo"
          placeholder="kholguin@uncundinamarca.edu.co"
          id="correo"
          type="email"
          name="correo"
          errorMsm="Debe ser un correo válido"
          expRegular={expresiones.correo}
          icon={<Mail className={`${correo.valido === "true" ? "opacity-100 text-exito" : correo.valido === "false" ? "opacity-100 text-error" : correo.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1 sm:col-span-2"
        />
        <SeleccionConValidacion
          label="Tipo de Documento"
          name="tipoDocumento"
          errorMsm="Este campo es requerido"
          estado={tipoDocumento}
          cambiarEstado={cambiarTipoDocumento}
          opciones={DatosTipoDoc}
          icon={<ScanEye className={`${tipoDocumento.valido === "true" ? "opacity-100 text-exito" : tipoDocumento.valido === "false" ? "opacity-100 text-error" : tipoDocumento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <InputRegistros
          estado={numeroDocumento}
          cambiarEstado={cambiarNumeroDocumento}
          label="Número de Documento"
          placeholder="12345678"
          id="numeroDocumento"
          type="text"
          name="numeroDocumento"
          errorMsm="El número de documento debe tener entre 8 y 15 dígitos"
          expRegular={expresiones.numeroDocumento}
          icon={<Fingerprint className={`${numeroDocumento.valido === "true" ? "opacity-100 text-exito" : numeroDocumento.valido === "false" ? "opacity-100 text-error" : numeroDocumento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <InputRegistros
          estado={fechaNacimiento}
          cambiarEstado={cambiarFechaNacimiento}
          label="Fecha de Nacimiento"
          placeholder="1990-01-01"
          id="fechaNacimiento"
          type="date"
          name="fechaNacimiento"
          errorMsm="Este campo es requerido"
          expRegular={() => true}
          icon={<Calendar className={`${fechaNacimiento.valido === "true" ? "opacity-100 text-exito" : fechaNacimiento.valido === "false" ? "opacity-100 text-error" : fechaNacimiento.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1 sm:col-span-2"
        />
        <SeleccionConValidacion
          estado={modulo}
          placeholder="Módulo de ejemplo"
          id="modulo"
          label="Módulo"
          name="modulo"
          errorMsm="Este campo es requerido"
          cambiarEstado={cambiarModulo}
          opciones={DatosModulo}
          icon={<List className={`${modulo.valido === "true" ? "opacity-100 text-exito" : modulo.valido === "false" ? "opacity-100 text-error" : modulo.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <SeleccionConValidacion
          estado={profesion}
          placeholder="Ingenieria Industrial"
          id="profesion"
          label="Profesión - Carrera"
          name="profesion"
          errorMsm="Este campo es requerido"
          cambiarEstado={cambiarProfesion}
          opciones={DatosProfesion}
          icon={<List className={`${profesion.valido === "true" ? "opacity-100 text-exito" : profesion.valido === "false" ? "opacity-100 text-error" : profesion.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <InputRegistros
          estado={rol}
          cambiarEstado={cambiarRol}
          label="Rol"
          placeholder="Administrador"
          id="rol"
          type="text"
          name="rol"
          errorMsm="Este campo es requerido"
          expRegular={() => true}
          icon={<Shield className={`${rol.valido === "true" ? "opacity-100 text-exito" : rol.valido === "false" ? "opacity-100 text-error" : rol.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <InputRegistros
          estado={upa}
          cambiarEstado={cambiarUpa}
          label="UPA"
          placeholder="UPA 1"
          id="upa"
          type="text"
          name="upa"
          errorMsm="Este campo es requerido"
          expRegular={() => true}
          icon={<Building className={`${upa.valido === "true" ? "opacity-100 text-exito" : upa.valido === "false" ? "opacity-100 text-error" : upa.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <SeleccionConValidacion
          label="Tipo de Ticket"
          name="tipoTicket"
          errorMsm="Este campo es requerido"
          estado={tipoTicket}
          cambiarEstado={cambiarTipoTicket}
          opciones={opcionesTipoTicket}
          icon={<List className={`${tipoTicket.valido === "true" ? "opacity-100 text-exito" : tipoTicket.valido === "false" ? "opacity-100 text-error" : tipoTicket.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <SeleccionConValidacion
          label="Estado del Ticket"
          name="estadoTicket"
          errorMsm="Este campo es requerido"
          estado={estadoTicket}
          cambiarEstado={cambiarEstadoTicket}
          opciones={opcionesEstado}
          icon={<List className={`${estadoTicket.valido === "true" ? "opacity-100 text-exito" : estadoTicket.valido === "false" ? "opacity-100 text-error" : estadoTicket.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1"
        />
        <InputRegistros
          estado={soporteTicket}
          cambiarEstado={cambiarSoporteTicket}
          label="Soporte del Ticket"
          placeholder="Detalles del soporte"
          id="soporteTicket"
          type="text"
          name="soporteTicket"
          errorMsm="Este campo es requerido"
          expRegular={() => true}
          icon={<FileText className={`${soporteTicket.valido === "true" ? "opacity-100 text-exito" : soporteTicket.valido === "false" ? "opacity-100 text-error" : soporteTicket.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1 sm:col-span-2"
        />
        <InputRegistros
          estado={descripcion}
          cambiarEstado={cambiarDescripcion}
          label="Descripción"
          placeholder="Descripción del ticket"
          id="descripcion"
          type="text"
          name="descripcion"
          errorMsm="Máximo 250 caracteres"
          expRegular={expresiones.descripcion}
          icon={<FileText className={`${descripcion.valido === "true" ? "opacity-100 text-exito" : descripcion.valido === "false" ? "opacity-100 text-error" : descripcion.valido === null ? "opacity-100 text-green-800 dark:text-green-600" : ""}`}/>}
          className="col-span-1 sm:col-span-2"
        />

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

export default RegistroNuevoTicket;
