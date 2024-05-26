import { MoreVertical, ChevronLast, ChevronFirst, Cctv } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-screen">
      <nav className="h-screen flex flex-col bg-slate-50 border-r-2 border-gray-300 shadow-sm dark:bg-neutral-950 dark:border-neutral-800">
        <div className="p-4 pb-2 flex items-center justify-center">
          <div
            className={`transition-all flex-grow ${expanded ? "mr-2 flex" : "w-0 overflow-hidden"}`}
          >
            {expanded && (
              <img
                src="./public/imgs/logoa.png"
                alt="description"
                className="flex flex-grow mr-3 w-24 h-auto"
              />
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg text-white bg-green-800 hover:bg-green-600 dark:hover:bg-gray-400 dark:text-black dark:bg-green-600"
            >
              {expanded ? (
                <ChevronFirst className="dark:text-white" />
              ) : (
                <ChevronLast />
              )}
            </button>
          </div>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className=" flex p-3 border-t-2 border-neutral-300 dark:border-neutral-800">
          <img
            src="./public/imgs/yo.png"
            alt=""
            className="w-12 h-14 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold dark:text-white">Kevin</h4>
              <span className="text-xs text-gray-600 dark:text-white">
                kholguin@udec.edu.com
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
    <NavLink to={to} className="flex items-center justify-center w-full">
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
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-40 ml-3" : "w-0"
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
    </NavLink>
  );
}
