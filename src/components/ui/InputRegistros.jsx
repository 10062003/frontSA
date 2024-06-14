import React from "react";
import { CircleCheck, CircleX } from "lucide-react";

const InputRegistros = ({
  label,
  classNamelabel,
  placeholder,
  classNameInput,
  type,
  name,
  errorMsm,
  expRegular,
  icon,
  estado,
  cambiarEstado,
}) => {
  const validacion = (expRegular) => {
    if (expRegular.test(estado.campo)) {
      cambiarEstado({ ...estado, valido: "true" });
      console.log("bien");
    } else {
      cambiarEstado({ ...estado, valido: "false" });
      console.log("mal");
    }
  };

  return (
    <div className="text-green-700">
      <label
        htmlFor={name}
        className={`block text-base font-medium p-1 ml-4 min-h-2.5 cursor-pointer dark:text-white ${classNamelabel} ${estado.valido === "true" ? "text-exito dark:text-exito" : ""} ${estado.valido === "false" ? "text-error dark:text-error" : ""}`}
      >
        {label}
      </label>
      <div className="flex relative justify-center items-center">
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          value={estado.campo}
          onChange={(e) => cambiarEstado({ ...estado, campo: e.target.value })}
          onKeyUp={() => validacion(expRegular)}
          onBlur={() => validacion(expRegular)}
          className={`input-placeholder w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] pr-[40px] pl-[40px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100 ${classNameInput} ${estado.valido === "false" ? "border-error dark:border-error focus:border-error dark:focus:border-error text-black" : ""} ${estado.valido === "true" ? "text-black" : ""} ${estado.valido === null ? "text-neutral-400" : ""}`}
        />
        <span className="absolute left-2">{icon}</span>
        <CircleCheck
          className={`absolute text-base right-2.5 z-[100] ${estado.valido === "true" ? "opacity-100 text-exito" : "opacity-0"}`}
        />
        <CircleX
          className={`absolute text-base right-2.5 z-[100] ${estado.valido === "false" ? "opacity-100 text-error" : "opacity-0"}`}
        />
      </div>
      <p
        className={`text-xs text-error mb-0 mt-2 ml-3 mr-3 opacity-0 ${estado.valido === "false" ? "opacity-100" : ""}`}
      >
        {errorMsm}
      </p>
    </div>
  );
};

export default InputRegistros;
