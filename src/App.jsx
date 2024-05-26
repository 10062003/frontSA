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
            <NavBar title={"Estos son tus Módulos ☠️☠️☠️"} />
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
]);

const App = () => {
  return (
    <div className="bg-gray-200 dark:bg-neutral-900">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
