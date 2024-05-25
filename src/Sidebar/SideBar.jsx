import { MoreVertical, ChevronLast, ChevronFirst, Cctv } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-screen flex flex-col bg-slate-50 border-gray-200 shadow-sm dark:bg-neutral-950">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className={`flex overflow-hidden transition-all ${
              expanded ? "w-52" : "w-0"
            }`}
          >
            <Cctv className="text-green-800 mx-2 h-10 w-auto"></Cctv>
            <p className="LestomaLogo">LESTOMA</p>
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg text-white bg-green-800 hover:bg-green-600 dark:hover:bg-gray-400 dark:text-black dark:bg-green-600"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img src="" alt="" className="w-10 h-10 rounded-md" />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold dark:text-white">John Doe</h4>
              <span className="text-xs text-gray-600 dark:text-white">
                johndoe@gmail.com
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, to, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-stone-200 to-stone-100 text-green-800 "
            : "hover:bg-stone-200 text-gray-600 dark:text-white dark:hover:bg-neutral-800"
        }
    `}
    >
      <NavLink to={to} className="flex items-center w-full">
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-green-600 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
      </NavLink>
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-stone-100 text-green-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          dark:bg-neutral-900 dark:text-white
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
