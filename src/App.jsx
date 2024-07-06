import React from "react";
import { useState, useEffect } from "react";
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
import RegistroUsuario from "./Usuarios/RegistroUsuario";
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
import TablaModulo from "./Modulo/TablaModulo";
import TablaActividades from "./Actividades/TablaActividades";
import TablaDocumentos from "./Documentos/TablaDocumentos";
import TablaProfesiones from "./Profesion/TablaProfesiones";
import TablaRoles from "./Roles/TablaRoles";
import TablaUsuarioActividades from "./Actividades/Actividades por Usuario/TablaUsuarioActividades";
import TablaEstadoTickets from "./Tickets/EstadosTicket/TablaEstadosTicket";
import TablaUsuarios from "./Usuarios/TablaUsuarios";
import RegistroNuevoTicket from "./Tickets/CrearTickets/RegistroNuevoTicket";
import TablaTipoTicket from "./Tickets/TablaTipoTickets";
import PrivateRoute from "./RutaProtegida";
import ForgotPassword from "./Login/OlvidasteTuContraseña";
import TablaTickets from "./Tickets/CrearTickets/TablaNuevosTickets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Login" />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "OlvidasteTuContrasena",
    element: <ForgotPassword />,
  },
  {
    path: "Inicio",
    element: (
      <PrivateRoute
        element={
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
        }
      />
    ),
  },
  {
    path: "Upas",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <UpaInicio />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroUpa",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <RegistroUpa />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaUpa",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaUpa />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "Roles",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RolesInicio />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroRoles",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroRoles />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaRoles",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaRoles />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroUsuario",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <RegistroUsuario />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaUsuarios",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaUsuarios />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "Documentos",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <DocumentosInicio />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroDocumentos",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroDocumentos />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaDocumentos",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <TablaDocumentos />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "Tickets",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center">
                <TicketsInicio />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroNuevoTicket",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroNuevoTicket />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaTickets",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaTickets />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroTipoTickets",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroTiposTickets />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaTipoTicket",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaTipoTicket />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroEstadosTickets",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroEstadosTickets />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaEstadoTickets",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaEstadoTickets />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "Actividades",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center">
                <ActividadesInicio />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroActividades",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroActividad />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaActividades",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaActividades />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroUsuarioActividad",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <UsuarioActividades />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaUsuarioActividades",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaUsuarioActividades />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "Estados",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <EstadoInicio />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroEstado",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroEstados />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "ListarEstados",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaEstados />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "Modulos",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <ModuloInicio />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroModulo",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroModulo />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaModulo",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaModulo />
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "Profesiones",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <ProfesionInicio />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "RegistroProfesion",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <MostrarSideBar />
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col flex-1 items-center justify-center p-4">
                <RegistroProfesion />
              </div>
            </div>
          </div>
        }
      />
    ),
  },
  {
    path: "TablaProfesiones",
    element: (
      <PrivateRoute
        element={
          <div className="flex h-screen">
            <div className="flex-shrink-0">
              <MostrarSideBar />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-4">
              <TablaProfesiones />
            </div>
          </div>
        }
      />
    ),
  },
]);

const App = () => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-gray-100 dark:bg-neutral-900 font-sans">
      <ToasterWrapper richColors closeButton />
      <RouterProvider router={router}>
        {/* Define tus rutas aquí... */}
      </RouterProvider>
    </div>
  );
};

export default App;
