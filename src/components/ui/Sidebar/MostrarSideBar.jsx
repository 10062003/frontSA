import Sidebar from "./SideBar";
import { SidebarItem } from "./SideBar";

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

const MostrarSideBar = () => {
  return (
    <div className="">
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
  );
};

export default MostrarSideBar;
