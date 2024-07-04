import React, { useState } from "react";
import { toast } from "sonner";
import ServiciosLogin from "./ServiciosLogin";
import ButtonBasic from "../components/ui/ButtonBasic";
import InputBasic from "../components/ui/InputBasic";
import Label from "../components/ui/Label";
import { Mail } from "lucide-react";

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
    <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 dark:bg-neutral-900">
      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Correo Institucional</Label>
            <InputBasic
              id="email"
              name="email"
              type="email"
              placeholder="jperez@ucundinamarca.edu.co"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="absolute left-2">
              <Mail fill="#16a34a" stroke="#fff" />
            </span>
          </div>
          <ButtonBasic className="text-white" type="submit">
            Enviar código
          </ButtonBasic>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleCodeSubmit} className="space-y-6">
          <div>
            <Label htmlFor="code">Código de recuperación</Label>
            <InputBasic
              id="code"
              name="code"
              type="text"
              placeholder="Ingresa el código"
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <ButtonBasic className="text-white" type="submit">
            Validar código
          </ButtonBasic>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          <div>
            <Label htmlFor="newPassword">Nueva contraseña</Label>
            <InputBasic
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Ingresa la nueva contraseña"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
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
