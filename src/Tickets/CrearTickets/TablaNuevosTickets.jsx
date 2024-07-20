import React, { useEffect, useState } from "react";
import DataTable from "../../components/tablas/datatable";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import ServiciosNuevoTicket from "./ServiciosNuevoTicket";
import SeleccionConValidacion from "../../components/ui/SeleccionConValidacion";
import { List } from "lucide-react";
import ServiciosTickets from "../ServiciosTickets";
import ButtonBasic from "../../components/ui/ButtonBasic";

const Badge = ({ status }) => {
  // Define los estilos de los badges para cada estado con colores más oscuros
  const badgeStyles = {
    Recibido: {
      backgroundColor: "#FDF8B5", // Color pastel amarillo
      color: "#D4B800", // Amarillo oscuro
    },
    Enviado: {
      backgroundColor: "#9FCFFD", // Color pastel azul
      color: "#005BB5", // Azul oscuro
    },
    Rechazado: {
      backgroundColor: "#FFB5B5", // Color pastel rojo
      color: "#D62A2A", // Rojo oscuro
    },
    Solucionado: {
      backgroundColor: "#E2EFE2", // Color pastel verde
      color: "#2D6A4F", // Verde oscuro
    },
    default: {
      backgroundColor: "#E2EFE2", // Color pastel verde
      color: "#2D6A4F", // Verde oscuro
    },
  };

  // Usa el estilo del badge basado en el estado o el estilo por defecto
  const badgeStyle = badgeStyles[status] || badgeStyles.default;

  return (
    <span
      style={{
        ...badgeStyle,
        padding: "0.5rem 1rem",
        borderRadius: "1rem",
        display: "inline-block",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {status}
    </span>
  );
};

const TablaTickets = () => {
  const servicioNuevoTickets = new ServiciosNuevoTicket();
  const ServicioTipoTicket = new ServiciosTickets();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tipoTicket, cambiarTipoTicket] = useState({
    campo: "",
    valido: null,
  });
  const [dataTipoTicket, setDataTipoTicket] = useState([]);

  const ObtenerDatosTipoTicket = async () => {
    try {
      const respuesta = await ServicioTipoTicket.ListarTipoTicket();
      if (respuesta.respuesta === 1) {
        setDataTipoTicket(respuesta.listaTipoTicket);
      } else {
        toast.error("Error al cargar los datos");
      }
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
  };

  useEffect(() => {
    ObtenerDatosTipoTicket();
  }, []);

  const DatosTipoTicket = dataTipoTicket.map((estado) => ({
    campo: estado.mtIdTipoTicKets,
    label: estado.mtTipoTicKets,
    valido: null,
  }));

  const ObtenerDatosTabla = async (tipoTicketId) => {
    setLoading(true);
    const respuesta = await servicioNuevoTickets.ListarTickets(tipoTicketId);

    if (respuesta.respuesta === 1) {
      setData(respuesta.listaTipoTicket);
    } else {
      toast.error("Error al cargar los datos");
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ticket = {
      TIdTipoTickets: tipoTicket.campo,
    };
    print(ticket);
    try {
      const respuesta = await servicioNuevoTickets.RegistrarNuevoTicket(ticket);
      console.log("Respuesta del servidor:", respuesta);

      if (respuesta && respuesta.respuesta === 1) {
        cambiarTipoTicket({ campo: "", valido: null });
        toast.success("Ticket registrado correctamente", { duration: 4000 });
      } else {
        toast.error("Error al enviar el ticket, revise los campos");
      }
    } catch (error) {
      toast.error("Error de servidor: no se pudo registrar el ticket");
      console.error("Error en el servidor:", error);
    }
  };

  const handleBuscarClick = (e) => {
    e.preventDefault();
    if (tipoTicket.valido === "true") {
      ObtenerDatosTabla(tipoTicket.campo);
    } else {
      toast.error("Seleccione un tipo de ticket válido");
    }
  };

  const columns = [
    {
      header: "ID Ticket",
      accessorKey: "mtIdTicKets",
      hidden: true,
    },
    {
      header: "Nombre",
      accessorKey: "mtNombre",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Apellido",
      accessorKey: "mtApellido",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Correo",
      accessorKey: "mtCorreo",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Contraseña",
      accessorKey: "mtContrasenna",
      hidden: true,
    },
    {
      header: "Tipo de documento",
      accessorKey: "mtTipoDocumento",
      hidden: true,
    },
    {
      header: "mNombreTTipoDocumento",
      accessorKey: "mNombreTTipoDocumento",
      hidden: true,
    },
    {
      header: "Número de documento",
      accessorKey: "mtNumeroDocumento",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Fecha de nacimiento",
      accessorKey: "mtFechaNacimiento",
      hidden: true,
    },
    {
      header: "Id Modulo",
      accessorKey: "mtIdModulo",
      hidden: true,
    },
    {
      header: "Módulo",
      accessorKey: "mtModulo",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Id Profesión",
      accessorKey: "mtIdProfesion",
      hidden: true,
    },
    {
      header: "Profesión",
      accessorKey: "mtProfesion",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Id Rol",
      accessorKey: "mtIdRol",
      hidden: true,
    },
    {
      header: "Rol",
      accessorKey: "mtRol",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Id Upa",
      accessorKey: "mtIdUpa",
      hidden: true,
    },
    {
      header: "Upa",
      accessorKey: "mtUpa",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Descripción Actividad",
      accessorKey: "mtActDescripcion",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Ultima modificación",
      accessorKey: "mtActUltModificacion",
      hidden: true,
    },
    {
      header: "Id Usuario",
      accessorKey: "mtActUltModificacion",
      hidden: true,
    },
    {
      header: "Usuario",
      accessorKey: "mttUsuarioSolicito",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Id Estado Ticket",
      accessorKey: "mtIdEstadoTickets",
      hidden: true,
    },
    {
      header: "Estado Ticket",
      accessorKey: "mtEstadoTickets",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {<Badge status={cell.getValue()}></Badge>}
        </div>
      ),
    },
    {
      header: "Id Tipo Ticket",
      accessorKey: "mtIdTipoTickets",
      hidden: true,
    },
    {
      header: "Tipo Ticket",
      accessorKey: "mtTipoTickets",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cell.getValue()}
        </div>
      ),
    },
    {
      header: "Soporte",
      accessorKey: "tSoporteTicket",
      hidden: true,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open options</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(row.original.id)}
              >
                Copiar nombre
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Editar</DropdownMenuItem>
              <DropdownMenuItem>Borrar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  const visibleColumns = columns.filter((column) => !column.hidden);

  if (loading) {
    return <div className=" justify-center items-center">Loading...</div>;
  }

  return (
    <section className="">
      <div className="container">
        <h1 className="text-5xl font-bold text-green-700 mt-2 mb-5">
          Listado de tickets
        </h1>
        <form onSubmit={handleSubmit}>
          <SeleccionConValidacion
            label="Tipo de Ticket"
            name="tipoTicket"
            errorMsm="Este campo es requerido"
            estado={tipoTicket}
            cambiarEstado={cambiarTipoTicket}
            opciones={DatosTipoTicket}
            icon={
              <List
                className={`${
                  tipoTicket.valido === "true"
                    ? "opacity-100 text-exito"
                    : tipoTicket.valido === "false"
                      ? "opacity-100 text-error"
                      : tipoTicket.valido === null
                        ? "opacity-100 text-green-800 dark:text-green-600"
                        : ""
                }`}
              />
            }
            className="col-span-1"
          />
          <div className="flex flex-col col-span-1 sm:col-span-2 mb-4">
            <ButtonBasic
              children={"Filtrar"}
              className="cursor-pointer text-white hover:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] bg-green-700 border-green-700 text-base"
              onClick={handleBuscarClick}
            />
          </div>
        </form>
        <DataTable
          data={data}
          columns={visibleColumns}
          footer={"Lista de tipos de tickets"}
          headerClassName="text-center"
        />
      </div>
    </section>
  );
};

export default TablaTickets;
