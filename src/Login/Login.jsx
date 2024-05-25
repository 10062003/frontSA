import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import { MailIcon } from "./icons/MailIcon";
import PassIcon from "./icons/PassIcon";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cctv } from "lucide-react";
import ServiciosLogin from "./ServiciosLogin";
import { useState } from "react";
import sha512 from "crypto-js/sha512";

const Login = () => {
  const servicioLogin = new ServiciosLogin();
  const [tCorreoUsuario, setCorreo] = useState("");
  const [tContrasenna, setContrasenna] = useState("");
  const notifyerror = () => toast.error("Por favor completa el captcha!");
  const notifysuccess = () => toast.success("Acceso concedido.");
  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("Algo cambió desde la última vez.");
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot, acceso concedido.");
      notifysuccess();
      const contrasena = sha512(tContrasenna).toString();
      const user = { tCorreoUsuario, tContrasenna: contrasena };
      const respuesta = servicioLogin.IniciarSesion(user);
      if (respuesta.respuesta === 1) {
        toast.success(respuesta.mensaje);
        window.location.href = "/#/Inicio";
        window.location.reload();
      } else {
        console.log(respuesta.mensaje);
      }
    } else {
      console.log("Por favor acepta el captcha.");
      notifyerror();
    }
  };

  return (
    <>
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </div>

      <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 dark:bg-neutral-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/*<LogoIcon className="mx-auto h-12 w-auto dark:text-green-600" fill="#16a34a" />*/}
          <Cctv className="mx-auto h-12 w-auto dark:text-green-600 text-green-600"></Cctv>
          <h2 className="mt-5 text-center text-4xl font-bold leading-9 tracking-tight text-green-600">
            Super Administrador
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={submit}
          >
            <div>
              <Label htmlFor="email">Correo Institucional</Label>
              <div className="mt-2">
                <div className="relative flex items-center">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jperez@ucundinamarca.edu.co"
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                  <span className="absolute left-2">
                    <MailIcon fill="#16a34a" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
              </div>
              <div className="mt-2">
                <div className="relative flex items-center justify-center">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    onChange={(e) => setContrasenna(e.target.value)}
                    required
                  />
                  <span className="absolute left-2">
                    <PassIcon fill="#16a34a" />
                  </span>
                </div>
              </div>
              <div className="text-sm m-2 mb-6 flex justify-center">
                <a
                  href="#"
                  className="font-semibold text-green-600 hover:text-green-500"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="recaptcha">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LeNTm8pAAAAAJ8LiwLy1QSgHNWPKeBR4XZoKsqO"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button type="submit">Iniciar sesión</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
