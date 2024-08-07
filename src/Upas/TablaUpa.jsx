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
import ServiciosUpa from "./ServiciosUpa";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

const Badge = ({ status }) => {
  const isActive = status === "Activado";
  const badgeStyle = {
    backgroundColor: isActive ? "#E2EFE2" : "#F3E2E2",
    color: isActive ? "#54C252" : "#E82828",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    display: "inline-block",
    fontWeight: "bold",
    textAlign: "center",
  };
  return <span style={badgeStyle}>{status}</span>;
};

const TablaUpa = () => {
  const servicioUpa = new ServiciosUpa();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const ObtenerDatosTabla = async () => {
    const respuesta = await servicioUpa.ListarUpas();
    if (respuesta.respuesta === 1) {
      setData(respuesta.listaUpas);
    } else {
      toast.error("Error al cargar los datos");
    }
    setLoading(false);
  };

  useEffect(() => {
    ObtenerDatosTabla();
  }, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "mlUpsId",
      hidden: true,
    },
    {
      header: "Nombre",
      accessorKey: "mlUpsNombre",
    },
    {
      header: "Descripcion",
      accessorKey: "mlUpsDescipcion",
    },
    {
      header: "Ubicacion",
      accessorKey: "mlUpsUbicacion",
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
      accessorKey: "mlUpsIdEstado",
      hidden: true,
    },
    {
      header: "Estado",
      accessorKey: "mlUpsEstado",
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
      header: "Ultima Modificacion",
      accessorKey: "mlUpsUltimaModificacion",
      hidden: true,
    },
    {
      header: "Ciudad",
      accessorKey: "mlUpsCiudad",
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
      header: "Departamento",
      accessorKey: "mlUpsDepartamento",
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
    return <div>Loading...</div>;
  }

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="mb-10 text-5xl font-bold text-green-700">
          Listado de Upas
        </h1>
        <DataTable
          data={data}
          columns={visibleColumns}
          footer={"Lista de UPAs"}
          headerClassName="text-center" // Añade esta línea
        />
      </div>
    </section>
  );
};

export default TablaUpa;
