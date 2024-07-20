import React, { useEffect, useState } from "react";
import DataTable from "../components/tablas/datatable";
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
import ServiciosUsuario from "./ServiciosRegUsuario";
import { DialogDemo } from "./EditarUsuario";

const Badge = ({ status }) => {
  const isActive = status === "Activado";
  const badgeStyle = {
    backgroundColor: isActive ? "#E2EFE2" : "#F3E2E2",
    color: isActive ? "#54C252" : "#E82828",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    textAlign: "center",
  };
  return <div style={badgeStyle}>{status}</div>;
};

const TablaUsuarios = () => {
  const servicioUsuario = new ServiciosUsuario();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const ObtenerDatosTabla = async () => {
    try {
      const respuesta = await servicioUsuario.ListarUsuarios();
      if (respuesta.respuesta === 1) {
        setData(respuesta.listaUsuarios);
      } else {
        toast.error("Error al cargar los datos");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ObtenerDatosTabla();
  }, []);

  const handleEditClick = async (user) => {
    try {
      const respuesta = await servicioUsuario.ObtenerUsuarioPorId(user.mUsrId);
      if (respuesta.respuesta === 1) {
        console.log("Response from backend:", respuesta.usuario);
        setSelectedUser(respuesta.usuario);
        setIsDialogOpen(true);
      } else {
        toast.error("Error al obtener el usuario");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      toast.error("Error al obtener el usuario");
    }
  };

  const columns = [
    {
      header: "ID Usuario",
      accessorKey: "mUsrId",
      hidden: true,
    },
    {
      header: "Nombre",
      accessorKey: "mUsrNombre",
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
      accessorKey: "mUsrApellido",
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
      accessorKey: "mUsrCorreo",
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
      header: "ID Estado",
      accessorKey: "etdTkIdEstado",
      hidden: true,
    },
    {
      header: "Estado",
      accessorKey: "mUsrEstado",
      cell: ({ cell }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge status={cell.getValue()} />
        </div>
      ),
    },
    {
      header: "Profesion",
      accessorKey: "mUsrIdProfesion",
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
      header: "Rol",
      accessorKey: "mUsrIdRol",
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
      header: "Tipo Documento",
      accessorKey: "mUsrIdTipoDocumento",
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
      header: "Número Documento",
      accessorKey: "mUsrNumeroDocumento",
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
      header: "Upa",
      accessorKey: "mUsrIdUpa",
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
      id: "actions",
      cell: ({ row }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            backgroundColor: "",
          }}
          className="dark:hover:bg-neutral-700"
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
                onClick={() =>
                  navigator.clipboard.writeText(row.original.mUsrNombre)
                }
              >
                Copiar nombre
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleEditClick(row.original)}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem>Borrar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  const visibleColumns = columns.filter((column) => !column.hidden);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="mb-10 text-5xl font-bold text-green-700">
          Listado de usuarios
        </h1>
        <DataTable
          data={data}
          columns={visibleColumns}
          footer={"Lista de usuarios."}
          headerClassName="text-center"
        />
        {isDialogOpen && selectedUser && (
          <DialogDemo
            userData={selectedUser}
            onClose={() => setIsDialogOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default TablaUsuarios;
