import React, { useEffect, useState } from "react";
import DataTable from "../../components/tablas/datatable";
import { toast } from "sonner";
import ServiciosUsuariosAct from "./ServiciosUsuariosAct";
import SeleccionConValidacion from "../../components/ui/SeleccionConValidacion";
import ButtonBasic from "../../components/ui/ButtonBasic";
import { List, Orbit } from "lucide-react";
import ServiciosEstados from "../../Estados/ServicioEstados";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/Button";
import { MoreHorizontal } from "lucide-react";

const TablaUsuariosAct = () => {
  const servicioUsuariosAct = new ServiciosUsuariosAct();
  const servicioEstados = new ServiciosEstados();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [estado, cambiarEstado] = useState({
    campo: "",
    valido: null,
  });
  const [dataEstados, setDataEstados] = useState([]);

  const ObtenerDatosEstado = async () => {
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

  useEffect(() => {
    ObtenerDatosEstado();
  }, []);

  const DatosEstados = dataEstados.map((estado) => ({
    campo: estado.mEstadoId,
    label: estado.mEtdEstado,
    valido: null,
  }));

  const ObtenerDatosTabla = async (estado) => {
    setLoading(true);
    const respuesta = await servicioUsuariosAct.ListarUsuariosAct(estado);

    if (respuesta.respuesta === 1) {
      setData(respuesta.listaUsuariosAct);
    } else {
      toast.error("Error al cargar los datos");
    }
    setLoading(false);
  };

  const handleBuscarClick = (e) => {
    e.preventDefault();
    if (estado.valido === "true") {
      ObtenerDatosTabla(estado.campo);
    } else {
      toast.error("Seleccione un estado válido");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filtroEstado = {
      MEstadoId: estado.campo,
    };

    try {
      const respuesta =
        await servicioUsuariosAct.ListarUsuariosAct(filtroEstado);

      if (respuesta && respuesta.respuesta === 1) {
        cambiarEstado({ campo: "", valido: null });
        setData(respuesta.listaUsuariosAct);
        toast.success("Actividades de usuarios listadas correctamente", {
          duration: 4000,
        });
      } else {
        toast.error(
          "Error al listar actividades de usuarios, revise los campos"
        );
      }
    } catch (error) {
      toast.error(
        "Error de servidor: no se pudo listar las actividades de usuarios"
      );
      console.error("Error en el servidor:", error);
    }
  };

  const columns = [
    {
      header: "Actividad Usuario ID",
      accessorKey: "mlUsrAcId",
      hidden: true,
    },
    {
      header: "ID Actividad",
      accessorKey: "mlIdActividad",
      hidden: true,
    },
    {
      header: "Actividad",
      accessorKey: "mlActividad",
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
      header: "Usuario ID",
      accessorKey: "mlIdUsuario",
      hidden: true,
    },
    {
      header: "Nombre Usuario",
      accessorKey: "mlNombreUsuario",
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
      header: "Apellido Usuario",
      accessorKey: "mlApellidoUsuario",
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
      accessorKey: "mlCorreoUsuario",
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
      header: "UPA ID",
      accessorKey: "mlIdUpa",
      hidden: true,
    },
    {
      header: "UPA",
      accessorKey: "mlUpa",
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
      header: "Estado ID",
      accessorKey: "mlIdEstado",
      hidden: true,
    },
    {
      header: "Estado",
      accessorKey: "mlEstado",
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
      header: "Fecha modificación",
      accessorKey: "mlFechaUltimaModificacion",
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
    return <div className="justify-center items-center">Loading...</div>;
  }

  return (
    <section className="">
      <div className="container">
        <h1 className="text-5xl font-bold text-green-700 mt-2 mb-5">
          Listado de actividades de usuarios
        </h1>
        <form onSubmit={handleSubmit}>
          <SeleccionConValidacion
            label="Estado"
            name="estado"
            errorMsm="Este campo es requerido"
            estado={estado}
            cambiarEstado={cambiarEstado}
            opciones={DatosEstados}
            icon={
              <List
                className={`${
                  estado.valido === "true"
                    ? "opacity-100 text-exito"
                    : estado.valido === "false"
                      ? "opacity-100 text-error"
                      : estado.valido === null
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
          footer={"Lista de actividades de usuarios"}
          headerClassName="text-center"
        />
      </div>
    </section>
  );
};

export default TablaUsuariosAct;
