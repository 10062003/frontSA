import React from "react";
import Login from "./Login/Login";
import HomePage from "./HomePage/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import UpaInicio from "./Upas/UpaInicio";
import MostrarSideBar from "./components/ui/Sidebar/MostrarSideBar";
import RegistroUpa from "./Upas/RegistroUpa";
import TablaUpa from "./Upas/TablaUpa";
import ToasterWrapper from "./components/ui/Toast";
import RegistroUsuario from "./Registro/RegistroUsuario";
import "./index.css";
import RolesInicio from "./Roles/RolesInicio";
import RegistroRoles from "./Roles/RegistroRoles";
import DocumentosInicio from "./Documentos/DocumentosInicio";
import RegistroDocumentos from "./Documentos/RegistroDocumentos";
import TicketsInicio from "./Tickets/TicketsInicio";
import RegistroTiposTickets from "./Tickets/RegistroTickets";
import ActividadesInicio from "./Actividades/ActividadesInicio";
import RegistroActividad from "./Actividades/RegistroActividades";
import UsuarioActividades from "./Actividades/Actividades por Usuario/UsuarioActividades";
import RegistroEstadosTickets from "./Tickets/EstadosTicket/RegistroEstadosTickets";
import EstadoInicio from "./Estados/EstadosInicio";
import RegistroEstados from "./Estados/RegistroEstados";
import ModuloInicio from "./Modulo/ModuloInicio";
import RegistroModulo from "./Modulo/RegistroModulo";
import ProfesionInicio from "./Profesion/ProfesionInicio";
import RegistroProfesion from "./Profesion/RegistroProfesion";
import TablaEstados from "./Estados/TablaEstados";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Login" />,
  },
  {
    path: "Login",
    element: (
      <div className="bg-slate-100">
        <Login />
      </div>
    ),
  },
  {
    path: "Inicio",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className=" top-0 z-10">
            <NavBar title={"Estos son tus Módulos"} />
          </div>
          <div className="flex flex-col flex-1 p-4">
            <HomePage />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "Upas",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <UpaInicio />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroUpa",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <RegistroUpa />
        </div>
      </div>
    ),
  },
  {
    path: "TablaUpa",
    element: (
      <div className="flex h-screen">
        <div className="flex-shrink-0">
          <MostrarSideBar />
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto p-4">
          <TablaUpa />
        </div>
      </div>
    ),
  },
  {
    path: "Roles",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RolesInicio />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroRoles",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RegistroRoles />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroUsuario",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <RegistroUsuario />
        </div>
      </div>
    ),
  },
  {
    path: "Documentos",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <DocumentosInicio />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroDocumentos",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RegistroDocumentos />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "Tickets",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <TicketsInicio />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroTickets",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RegistroTiposTickets />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroEstadosTickets",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RegistroEstadosTickets />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "Actividades",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <ActividadesInicio />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroActividades",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RegistroActividad />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroUsuarioActividad",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <UsuarioActividades />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "Estados",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <EstadoInicio />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroEstado",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RegistroEstados />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "ListarEstados",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <TablaEstados />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "Modulos",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <ModuloInicio />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroModulo",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RegistroModulo />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "Profesiones",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <ProfesionInicio />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "RegistroProfesion",
    element: (
      <div className="flex h-screen">
        <MostrarSideBar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1 items-center justify-center p-4">
            <RegistroProfesion />
          </div>
        </div>
      </div>
    ),
  },
]);

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 font-sans">
      {/* Mantén el Toaster fuera de las rutas para que esté presente en todas las páginas */}
      <ToasterWrapper richColors closeButton />

      {/* Envuelve las rutas en RouterProvider */}
      <RouterProvider router={router}>
        {/* Define tus rutas aquí... */}
      </RouterProvider>
    </div>
  );
};

export default App;
