import {
  BarChart3,
  BellRing,
  Clock,
  Component,
  Drama,
  GraduationCap,
  Home,
  LayoutDashboard,
  NotepadText,
  ScrollText,
  Settings,
  SidebarIcon,
  Tags,
} from "lucide-react";
import Login from "./Login/Login";
import Sidebar, { SidebarItem } from "./Sidebar/Sidebar";

const App = () => {
  return (
    <div className=" flex dark:bg-neutral-800">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Inicio" />
        <SidebarItem icon={<BarChart3 size={20} />} text="Upas" />
        <SidebarItem icon={<BellRing size={20} />} text="Actividades" />
        <SidebarItem icon={<GraduationCap size={20} />} text="Profesiones" />
        <SidebarItem icon={<Component size={20} />} text="Modulos" />
        <SidebarItem icon={<NotepadText size={20} />} text="Estados" />
        <SidebarItem icon={<Drama size={20} />} text="Roles" />
        <SidebarItem icon={<Tags size={20} />} text="Ticket" />
        <SidebarItem icon={<Clock size={20} />} text="Historial" />
        <SidebarItem icon={<Settings size={20} />} text="Configuración" alert />
      </Sidebar>
      <div className="flex-1">
        <Login />
      </div>
    </div>
  );
};

export default App;
