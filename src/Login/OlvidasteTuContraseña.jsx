import React, { useState } from "react";
import { toast } from "sonner";
import ServiciosLogin from "./ServiciosLogin";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputBasic from "../components/ui/InputBasic";
import Label from "../components/ui/Label";
import { MailIcon } from "./icons/MailIcon";
import { KeyRound } from "lucide-react";

const ForgotPassword = () => {
  const servicioLogin = new ServiciosLogin();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const success = await servicioLogin.EnviarCorreoRecuperacion(email);
    if (success) {
      toast.success("Correo de recuperación enviado.");
      setStep(2);
    } else {
      toast.error("Error al enviar el correo.");
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    const success = await servicioLogin.ValidarCodigoRecuperacion(email, code);
    if (success) {
      toast.success("Código validado.");
      setStep(3);
    } else {
      toast.error("Código incorrecto.");
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const success = await servicioLogin.CambiarContrasenna(email, newPassword);
    if (success) {
      toast.success("Contraseña cambiada con éxito.");
    } else {
      toast.error("Error al cambiar la contraseña.");
    }
  };

  return (
    <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center border m- px-6 py-12 lg:px-8 dark:bg-neutral-900">
      {step === 1 && (
        <form
          onSubmit={handleEmailSubmit}
          className="space-y-6 w-full sm:w-1/2"
        >
          <h2 className="mt-5 mb-20 text-center text-5xl font-extrabold leading-9 tracking-tight text-green-600">
            Cambiar contraseña
          </h2>

          <div>
            <Label htmlFor="email">Ingresa tu correo</Label>
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
            <ButtonBasic className="text-white" type="submit">
              Enviar código
            </ButtonBasic>
          </div>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleCodeSubmit} className="space-y-6 w-full sm:w-1/2">
          <div>
            <Label htmlFor="code">Código de recuperación</Label>
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
                  <KeyRound className="text-green-600" />
                </span>
              </div>
            </div>
          </div>
          <ButtonBasic className="text-white" type="submit">
            Validar código
          </ButtonBasic>
        </form>
      )}
      {step === 3 && (
        <form
          onSubmit={handlePasswordSubmit}
          className="space-y-6 w-full sm:w-1/2"
        >
          <h2 className="mt-5 mb-20 text-center text-5xl font-extrabold leading-9 tracking-tight text-green-600"></h2>
          <div>
            <Label htmlFor="newPassword">Nueva contraseña</Label>
            <div className="mt-2">
              <div className="relative flex items-center">
                <InputBasic
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="Ingresa la nueva contraseña"
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <span className="absolute left-2">
                  <KeyRound className="text-green-600" />
                </span>
              </div>
            </div>
          </div>
          <ButtonBasic className="text-white" type="submit">
            Cambiar contraseña
          </ButtonBasic>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
