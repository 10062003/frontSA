import React, { useState } from "react";
import { toast } from "sonner";
import ServiciosLogin from "./ServiciosLogin";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputBasic from "../components/ui/InputBasic";
import LabelInput from "../components/ui/LabelInput";
import { MailIcon } from "./icons/MailIcon";
import { KeyRound, Eye, EyeOff } from "lucide-react";
import PassIcon from "./icons/PassIcon";

const ForgotPassword = () => {
  const servicioLogin = new ServiciosLogin();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await servicioLogin.EnviarCorreoRecuperacion(email);
      if (success) {
        toast.success("Correo de recuperación enviado.");
        setStep(2);
      } else {
        toast.error("Error al enviar el correo.");
      }
    } catch (error) {
      toast.error("Error al enviar el correo.");
    } finally {
      setLoading(false);
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await servicioLogin.ValidarCodigoRecuperacion(
        email,
        code
      );
      if (success) {
        toast.success("Código validado.");
        setStep(3);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Código incorrecto.");
      } else {
        toast.error("Error al validar el código.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }
    setLoading(true);
    try {
      const success = await servicioLogin.CambiarContrasenna(
        email,
        newPassword
      );
      if (success) {
        toast.success("Contraseña cambiada con éxito.");
        setTimeout(() => {
          window.location.href = "/Login";
        }, 2000);
      } else {
        toast.error("Error al cambiar la contraseña.");
      }
    } catch (error) {
      toast.error("Error al cambiar la contraseña.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center border m- px-6 py-12 lg:px-8 dark:bg-neutral-900">
      {step === 1 && (
        <form
          onSubmit={handleEmailSubmit}
          className="space-y-6 w-full sm:w-1/2"
        >
          <h2 className="mt-5 mb-5 text-center text-5xl font-extrabold leading-9 tracking-tight text-green-600">
            Cambiar contraseña
          </h2>
          <p className="text-center text-lg">
            Por favor ingresa tu correo institucional
          </p>
          <div>
            <LabelInput htmlFor="email">Ingresa tu correo</LabelInput>
            <div className="mt-2">
              <div className="relative flex items-center">
                <InputBasic
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jperez@ucundinamarca.edu.co"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="absolute left-2">
                  <MailIcon fill="#16a34a" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ButtonBasic
              className="text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Enviar código"
              )}
            </ButtonBasic>
          </div>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleCodeSubmit} className="space-y-6 w-full sm:w-1/2">
          <h2 className="mt-5 mb-5 text-center text-5xl font-extrabold leading-9 tracking-tight text-green-600">
            Cambiar contraseña
          </h2>
          <p className="text-center text-lg">
            Por favor ingresa el código de seguridad enviado a tu correo
          </p>
          <div>
            <LabelInput htmlFor="code">Código de recuperación</LabelInput>
            <div className="mt-2">
              <div className="relative flex items-center">
                <InputBasic
                  id="code"
                  name="code"
                  type="text"
                  placeholder="Ingresa el código"
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
                <span className="absolute left-2">
                  <KeyRound className="text-green-600 dark:text-white" />
                </span>
              </div>
            </div>
          </div>
          <ButtonBasic className="text-white" type="submit" disabled={loading}>
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Validar código"
            )}
          </ButtonBasic>
        </form>
      )}
      {step === 3 && (
        <form
          onSubmit={handlePasswordSubmit}
          className="space-y-6 w-full sm:w-1/2"
        >
          <h2 className="mt-5 mb-5 text-center text-5xl font-extrabold leading-9 tracking-tight text-green-600">
            Cambiar contraseña
          </h2>
          <p className="text-center text-lg">
            Por favor ingresa tu nueva contraseña
          </p>
          <div>
            <LabelInput htmlFor="new-password">Nueva contraseña</LabelInput>
            <div className="mt-2">
              <div className="relative flex items-center">
                <InputBasic
                  id="new-password"
                  name="new-password"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Nueva contraseña"
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <span className="absolute left-2">
                  <PassIcon fill="#16a34a" />
                </span>
                <span
                  className="absolute right-2 cursor-pointer"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="text-black dark:text-white" />
                  ) : (
                    <Eye className="text-black dark:text-white" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div>
            <LabelInput htmlFor="confirm-password">
              Confirmar contraseña
            </LabelInput>
            <div className="mt-2">
              <div className="relative flex items-center">
                <InputBasic
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar contraseña"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span className="absolute left-2">
                  <PassIcon fill="#16a34a" />
                </span>
                <span
                  className="absolute right-2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="text-black dark:text-white" />
                  ) : (
                    <Eye className="text-black dark:text-white" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <ButtonBasic className="text-white" type="submit" disabled={loading}>
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Cambiar contraseña"
            )}
          </ButtonBasic>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
