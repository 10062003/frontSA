import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import sha512 from "crypto-js/sha512";
import { toast } from "sonner";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputBasic from "../components/ui/InputBasic";
import Label from "../components/ui/Label";
import { MailIcon } from "./icons/MailIcon";
import PassIcon from "./icons/PassIcon";
import ReCAPTCHA from "react-google-recaptcha";
import ServiciosLogin from "./ServiciosLogin";
import { Cctv } from "lucide-react";

const Login = () => {
  const servicioLogin = new ServiciosLogin();
  const [tCorreoUsuario, setCorreo] = useState("");
  const [tContrasenna, setContrasenna] = useState("");
  const captcha = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    // Si hay un token, redirigir automáticamente a la página de inicio
    if (token) {
      navigate("/Inicio");
    }
  }, [navigate]);

  const onChange = () => {
    if (captcha.current && captcha.current.getValue()) {
      console.log("Captcha completado");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    if (captcha.current && captcha.current.getValue()) {
      const contrasena = sha512(tContrasenna).toString();
      const user = { tCorreoUsuario, tContrasenna: contrasena };

      try {
        const respuesta = await servicioLogin.IniciarSesion(user);

        if (respuesta.respuesta === 1) {
          toast.success("Acceso concedido.");
          localStorage.setItem("authToken", respuesta.token);
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
    <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 dark:bg-neutral-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Cctv className="mx-auto h-12 w-auto dark:text-green-600 text-green-600" />
        <h2 className="mt-5 text-center text-4xl font-extrabold leading-9 tracking-tight text-green-600">
          Super Administrador
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submit}>
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
              <Link
                to="/OlvidasteTuContrasena"
                className="font-semibold text-green-600 hover:text-green-500"
              >
                ¿Olvidaste tu contraseña?
              </Link>
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
  );
};

export default Login;
