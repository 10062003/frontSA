import { useReducer } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import LogoIcon from "./icons/LogoIcon";
import {MailIcon} from "./icons/MailIcon";
import PassIcon from "./icons/PassIcon";
import ReCAPTCHA from "react-google-recaptcha";
import React, {useRef} from 'react';

const Login = () => {

  const captcha=useRef(null);

  const onChange = () => {
    if(captcha.current.getValue()){
    console.log("Algo cambió desde la última vez.");
    }
  }

  const submit = (e) => {
    e.preventDefault();
    console.log('Se envio el formulario.')
  }

  return (
    <>
     
      <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8dark:bg-neutral-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <LogoIcon className="mx-auto h-12 w-auto dark:text-green-600" />
          <h2 className="mt-5 text-center text-4xl font-bold leading-9 tracking-tight text-green-600">
            Super Administrador
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={submit}>
            <div>
              <Label htmlFor="email">Correo Institucional</Label>
              <div className="mt-2">
                <div className="relative flex items-center">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jperez@ucundinamarca.edu.co"
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
