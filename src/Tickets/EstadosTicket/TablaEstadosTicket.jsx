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
import ServiciosEstadosTicket from "./ServiciosEstadosTickets";

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

const TablaEstadoTickets = () => {
  const servicioEstadosTickets = new ServiciosEstadosTicket();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const ObtenerDatosTabla = async () => {
    const respuesta = await servicioEstadosTickets.ListarEstadoTickets();
    if (respuesta.respuesta === 1) {
      setData(respuesta.listaEstadoTikets);
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
      header: "ID Estado Ticket",
      accessorKey: "etdTkId",
      hidden: true,
    },
    {
      header: "Estado Ticket",
      accessorKey: "etdTkEstadoTicket",
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
      accessorKey: "etdTkEstado",
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
          Listado de estado de tickets
        </h1>
        <DataTable
          data={data}
          columns={visibleColumns}
          footer={"Lista de estados de tikets."}
          headerClassName="text-center"
        />
      </div>
    </section>
  );
};

export default TablaEstadoTickets;
