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
        <MostrarSideBar />
        <div className="flex justify-center grow">
          <TablaUpa />
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
]);

const App = () => {
  return (
    <div className="bg-gray-200 dark:bg-neutral-900">
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
