import React from "react";
import {
  BarChart3,
  BellRing,
  Clock,
  Component,
  Drama,
  GraduationCap,
  Home,
  NotepadText,
  Settings,
  Tags,
} from "lucide-react";
import Login from "./Login/Login";
import Sidebar from "./Sidebar/SideBar";
import { SidebarItem } from "./Sidebar/SideBar";
import HomePage from "./HomePage/Home";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import UpaInicio from "./Upas/UpaInicio";

const router = createBrowserRouter([
  {
    path: "Login",
    element: (
      <div className="">
        <Login />
      </div>
    ),
  },
  {
    path: "Upas",
    element: (
      <div className="flex ">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Inicio" to={"/Inicio"} />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            text="Upas"
            to={"/Upas"}
          ></SidebarItem>
          <SidebarItem
            icon={<BellRing size={20} />}
            text="Actividades"
            to={"/Actividades"}
          />
          <SidebarItem
            icon={<GraduationCap size={20} />}
            text="Profesiones"
            to={"/Profesiones"}
          />
          <SidebarItem
            icon={<Component size={20} />}
            text="Modulos"
            to={"/Modulos"}
          />
          <SidebarItem
            icon={<NotepadText size={20} />}
            text="Estados"
            to={"/Estados"}
          />
          <SidebarItem icon={<Drama size={20} />} text="Roles" to={"/Roles"} />
          <SidebarItem icon={<Tags size={20} />} text="Ticket" to={"/Ticket"} />
          <SidebarItem
            icon={<Clock size={20} />}
            text="Historial"
            to={"/Historial"}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Configuración"
            to={"/Configuracion"}
          />
        </Sidebar>
      </div>
    ),
  },
  {
    path: "Inicio",
    element: (
      <div className="flex h-screen">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Inicio" to={"/Inicio"} />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            text="Upas"
            to={"/Upas"}
          ></SidebarItem>
          <SidebarItem
            icon={<BellRing size={20} />}
            text="Actividades"
            to={"/Actividades"}
          />
          <SidebarItem
            icon={<GraduationCap size={20} />}
            text="Profesiones"
            to={"/Profesiones"}
          />
          <SidebarItem
            icon={<Component size={20} />}
            text="Modulos"
            to={"/Modulos"}
          />
          <SidebarItem
            icon={<NotepadText size={20} />}
            text="Estados"
            to={"/Estados"}
          />
          <SidebarItem icon={<Drama size={20} />} text="Roles" to={"/Roles"} />
          <SidebarItem icon={<Tags size={20} />} text="Ticket" to={"/Ticket"} />
          <SidebarItem
            icon={<Clock size={20} />}
            text="Historial"
            to={"/Historial"}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Configuración"
            to={"/Configuracion"}
          />
        </Sidebar>
        <div className="flex">
          <div className="">
            <NavBar />
            <HomePage />
          </div>
        </div>
      </div>
    ),
  },
]);

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
