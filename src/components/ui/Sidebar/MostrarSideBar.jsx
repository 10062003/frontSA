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
  Orbit,
  Settings,
  Tags,
  Trees,
  UserPlus,
  FileStack
} from "lucide-react";

const MostrarSideBar = () => {
  return (
    <div className="">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Inicio" to={"/Inicio"} />
        <SidebarItem
          icon={<UserPlus size={20} />}
          text="Registro"
          to={"/RegistroUsuario"}
        ></SidebarItem>
        <SidebarItem
          icon={<Trees size={20} />}
          text="Upas"
          to={"/Upas"}
        ></SidebarItem>
        <SidebarItem
          icon={<BellRing size={20} />}
          text="Actividades"
          to={"/Actividades"}
        />
        <SidebarItem
          icon={<FileStack size={20} />}
          text="Documentos"
          to={"/Documentos"}
        ></SidebarItem>
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
          icon={<Orbit size={20} />}
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
        
      </Sidebar>
    </div>
  );
};

export default MostrarSideBar;
