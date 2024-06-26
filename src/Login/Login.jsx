import ButtonBasic from "../components/ui/ButtonBasic";
import InputBasic from "../components/ui/InputBasic";
import Label from "../components/ui/Label";
import { MailIcon } from "./icons/MailIcon";
import PassIcon from "./icons/PassIcon";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Cctv } from "lucide-react";
import ServiciosLogin from "./ServiciosLogin";
import { useState } from "react";
import sha512 from "crypto-js/sha512";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Login = () => {
  const servicioLogin = new ServiciosLogin();
  const [tCorreoUsuario, setCorreo] = useState("");
  const [tContrasenna, setContrasenna] = useState("");
  const captcha = useRef(null);
  const navigate = useNavigate();

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("Algo cambió desde la última vez.");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot, acceso concedido.");
      const contrasena = sha512(tContrasenna).toString();
      const user = { tCorreoUsuario, tContrasenna: contrasena };

      try {
        const respuesta = await servicioLogin.IniciarSesion(user);

        if (respuesta.respuesta === 1) {
          toast.success("Acceso concedido.");
          navigate("/Inicio");
        } else {
          toast.error(respuesta.mensaje || "Usuario o contraseña incorrectos.");
          console.log(respuesta.mensaje);
        }
      } catch (error) {
        console.error(error);
        toast.error("Ocurrió un error al iniciar sesión.");
      }
    } else {
      toast.error("Por favor completa el captcha!");
    }
  };

  return (
    <>
      <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 dark:bg-neutral-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/*<LogoIcon className="mx-auto h-12 w-auto dark:text-green-600" fill="#16a34a" />*/}
          <Cctv className="mx-auto h-12 w-auto dark:text-green-600 text-green-600"></Cctv>
          <h2 className="mt-5 text-center text-4xl font-extrabold leading-9 tracking-tight text-green-600">
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
                  <InputBasic
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
                  <InputBasic
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
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
              <ButtonBasic className="text-white" type="submit">
                Iniciar sesión
              </ButtonBasic>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
