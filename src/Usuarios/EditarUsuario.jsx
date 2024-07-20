import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import ServiciosUsuario from "./ServiciosRegUsuario";
import ServiciosDocumentos from "../Documentos/ServiciosDocumentos";
import ServiciosModulo from "../Modulo/ServiciosModulo";
import ServiciosEstados from "../Estados/ServicioEstados";
import ServiciosProfesion from "../Profesion/ServiciosProfesion";
import ServiciosRoles from "../Roles/ServiciosRoles";
import ServiciosUpa from "../Upas/ServiciosUpa";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export function DialogDemo({ onClose, userData }) {
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
    documento: /^\d{7,10}$/, // 1 a 10 números.
    fecha: /^\d{4}-\d{2}-\d{2}$/,
  };

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
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

  const validarCampo = (campo, expresion, cambiarCampo) => {
    if (expresion.test(campo)) {
      cambiarCampo({ ...campo, valido: "true" });
      return true;
    } else {
      cambiarCampo({ ...campo, valido: "false" });
      return false;
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

  useEffect(() => {
    if (userData) {
      cambiarNombre({ campo: userData.mUsrNombre || "", valido: null });
      cambiarApellido({ campo: userData.mUsrApellido || "", valido: null });
      cambiarCorreo({ campo: userData.mUsrCorreo || "", valido: null });
      cambiarTipoDocumento({
        campo: userData.mUsrIdTipoDocumento || "",
        valido: null,
      });
      cambiarNumeroDocumento({
        campo: userData.mUsrNumeroDocumento || "",
        valido: null,
      });
      cambiarFechaNacimiento({
        campo: userData.mUsrFechaNacimiento
          ? userData.mUsrFechaNacimiento.split("T")[0]
          : "",
        valido: null,
      });
      cambiarModulo({ campo: userData.mUsrModulo || "", valido: null });
      cambiarProfesion({ campo: userData.mUsrIdProfesion || "", valido: null });
      cambiarRol({ campo: userData.mUsrIdRol || "", valido: null });
      cambiarEstado({ campo: userData.mUsrIdEstado || "", valido: null });
      cambiarUpa({ campo: userData.mUsrIdUpa || "", valido: null });
    }
  }, [userData]);

  const DatosTipoDoc = dataTipoDocumento.map((doc) => ({
    campo: doc.mTdocId,
    label: doc.mTdocTipoDocumento,
    valido: null,
  }));

  const DatosModulo = dataModulo.map((mod) => ({
    campo: mod.mdsId,
    label: mod.mdsNombre,
    valido: null,
  }));

  const DatosProfesion = dataProfesion.map((prof) => ({
    campo: prof.mPfsId,
    label: prof.mPfsProfesion,
    valido: null,
  }));

  const DatosRoles = dataRoles.map((rol) => ({
    campo: rol.mRolId,
    label: rol.mRolNombre,
    valido: null,
  }));

  const DatosEstados = dataEstados.map((est) => ({
    campo: est.mEstadoId,
    label: est.mEtdEstado,
    valido: null,
  }));

  const DatosUpa = dataUpa.map((upa) => ({
    campo: upa.mlUpsId,
    label: upa.mlUpsNombre,
    valido: null,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todos los campos
    const validNombre = validarCampo(
      nombre.campo,
      expresiones.nombre,
      cambiarNombre
    );
    const validApellido = validarCampo(
      apellido.campo,
      expresiones.apellido,
      cambiarApellido
    );
    const validCorreo = validarCampo(
      correo.campo,
      expresiones.correo,
      cambiarCorreo
    );
    const validNumeroDocumento = validarCampo(
      numeroDocumento.campo,
      expresiones.documento,
      cambiarNumeroDocumento
    );
    const validFechaNacimiento = validarCampo(
      fechaNacimiento.campo,
      expresiones.fecha,
      cambiarFechaNacimiento
    );

    if (
      validNombre &&
      validApellido &&
      validCorreo &&
      validNumeroDocumento &&
      validFechaNacimiento
    ) {
      const usuario = {
        MusrId: userData.mUsrId,
        MUsrNombre: nombre.campo,
        MUsrApellido: apellido.campo,
        MUsrIdTipoDocumento: tipoDocumento.campo,
        MUsrNumeroDocumento: numeroDocumento.campo,
        MUsrFechaNacimiento: fechaNacimiento.campo,
        UsrUltimaModificacion: new Date(),
        mUsrIdModulo: modulo.campo,
        MUsrIdProfesion: profesion.campo,
        MUsrIdRol: rol.campo,
        MUsrIdEstado: estado.campo,
        MUsrIdUpa: upa.campo,
      };

      try {
        const respuesta = await servicioUsuario.EditarUsuario(usuario);
        if (respuesta.respuesta === 1) {
          toast.success("Usuario editado con éxito");
          onClose();
        } else {
          toast.error("Error al editar el usuario");
        }
      } catch (error) {
        toast.error("Error al editar el usuario");
      }
    } else {
      toast.error("Por favor, complete todos los campos correctamente.");
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="w-[60vw] sm:w-[500px] dark:bg-neutral-900 bg-white">
        <DialogHeader>
          <DialogTitle>Editar Usuario</DialogTitle>
          <DialogDescription>
            Complete la información del usuario para editar.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div>
            <label htmlFor="nombre" className="cursor-pointer ml-2">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              value={nombre.campo}
              className="input-placeholder w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarNombre({ campo: e.target.value, valido: null })
              }
              required
            />
            {nombre.valido === "false" && (
              <p className="text-red-500 mt-1 ml-1 text-xs">
                El nombre no debe contener números y máximo 20 caracteres
              </p>
            )}
          </div>
          <div>
            <label htmlFor="apellido" className="cursor-pointer ml-2">
              Apellido
            </label>
            <input
              id="apellido"
              type="text"
              value={apellido.campo}
              className="input-placeholder w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarApellido({ campo: e.target.value, valido: null })
              }
              required
            />
            {apellido.valido === "false" && (
              <p className="text-red-500 mt-1 ml-1 text-xs">
                El apellido no debe contener números y máximo 20 caracteres
              </p>
            )}
          </div>
          <div>
            <label htmlFor="correo" className="cursor-pointer ml-2">
              Correo
            </label>
            <input
              id="correo"
              type="email"
              value={correo.campo}
              className="input-placeholder w-full text-[13px] text-gray-500 bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarCorreo({ campo: e.target.value, valido: null })
              }
              required
              readOnly
            />
          </div>

          <div>
            <label htmlFor="tipoDocumento" className="cursor-pointer ml-2">
              Tipo de Documento
            </label>
            <select
              id="tipoDocumento"
              value={tipoDocumento.campo}
              className="w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarTipoDocumento({ campo: e.target.value, valido: null })
              }
              required
            >
              {DatosTipoDoc.map((doc) => (
                <option key={doc.campo} value={doc.campo}>
                  {doc.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="numeroDocumento" className="cursor-pointer ml-2">
              Número de Documento
            </label>
            <input
              id="numeroDocumento"
              type="text"
              value={numeroDocumento.campo}
              className="input-placeholder w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarNumeroDocumento({
                  campo: e.target.value,
                  valido: null,
                })
              }
              required
            />
            {numeroDocumento.valido === "false" && (
              <p className="text-red-500 mt-1 ml-1 text-xs">
                El número de documento debe ser un número de mínimo 7 caracteres
              </p>
            )}
          </div>
          <div>
            <label htmlFor="fechaNacimiento" className="cursor-pointer ml-2">
              Fecha de Nacimiento
            </label>
            <input
              id="fechaNacimiento"
              type="date"
              value={fechaNacimiento.campo}
              className="input-placeholder w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarFechaNacimiento({
                  campo: e.target.value,
                  valido: null,
                })
              }
              required
            />
            {fechaNacimiento.valido === "false" && (
              <p className="text-red-500 mt-1 ml-1 text-xs">
                La fecha de nacimiento debe ser una fecha
              </p>
            )}
          </div>
          <div>
            <label htmlFor="modulo" className="cursor-pointer ml-2">
              Módulo
            </label>
            <select
              id="modulo"
              value={modulo.campo}
              className="w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarModulo({ campo: e.target.value, valido: null })
              }
              required
            >
              {DatosModulo.map((mod) => (
                <option key={mod.campo} value={mod.campo}>
                  {mod.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="profesion" className="cursor-pointer ml-2">
              Profesión
            </label>
            <select
              id="profesion"
              value={profesion.campo}
              className="w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarProfesion({ campo: e.target.value, valido: null })
              }
              required
            >
              {DatosProfesion.map((prof) => (
                <option key={prof.campo} value={prof.campo}>
                  {prof.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="rol" className="cursor-pointer ml-2">
              Rol
            </label>
            <select
              id="rol"
              value={rol.campo}
              className="w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarRol({ campo: e.target.value, valido: null })
              }
              required
            >
              {DatosRoles.map((rol) => (
                <option key={rol.campo} value={rol.campo}>
                  {rol.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="estado" className="cursor-pointer ml-2">
              Estado
            </label>
            <select
              id="estado"
              value={estado.campo}
              className="w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarEstado({ campo: e.target.value, valido: null })
              }
              required
            >
              {DatosEstados.map((est) => (
                <option key={est.campo} value={est.campo}>
                  {est.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="upa" className="cursor-pointer ml-2">
              UPA
            </label>
            <select
              id="upa"
              value={upa.campo}
              className="w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100"
              onChange={(e) =>
                cambiarUpa({ campo: e.target.value, valido: null })
              }
              required
            >
              {DatosUpa.map((upa) => (
                <option key={upa.campo} value={upa.campo}>
                  {upa.label}
                </option>
              ))}
            </select>
          </div>
          <DialogFooter className="flex justify-center col-span-1 sm:col-span-2">
            <Button
              className="text-white bg-green-700 border-green-700 hover:bg-green-800 hover:border-green-800"
              type="submit"
            >
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
