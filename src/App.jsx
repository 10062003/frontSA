import { LayoutDashboard, SidebarIcon } from "lucide-react";
import Login from "./Login/Login";
import Sidebar, { SidebarItem } from "./Sidebar/SideBar";

const App = () => {
  return (
    <div className="h-screen dark:bg-neutral-800">
      <Login />
      {/* <Sidebar /> */}
      {/* <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" /> */}
    </div>
  );
};

export default App;
