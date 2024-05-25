import { LogOut } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-slate-50 dark:bg-neutral-950 w-full z-20">
      <div className="flex items-center justify-between mx-auto p-4">
        {/* Menú de navegación */}
        <div className="flex-1 flex justify-center" id="navbar-sticky">
          <ul className="flex flex-col md:flex-row md:p-0 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-50 md:dark:bg-neutral-950">
            <li>
              <div
                className="text-2xl md:text-3xl flex justify-center py-2 px-3 text-center rounded md:bg-transparent dark:text-green-600 text-green-700 md:p-0 md:dark:text-green-600"
                aria-current="page"
              >
                Bienvenido a tus módulos
              </div>
            </li>
          </ul>
        </div>

        {/* Contenedor del botón "Cerrar sesión" */}
        <div className="flex items-center ml-auto">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700"
          >
            <span className="">
              <LogOut />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
