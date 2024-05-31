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
    <div>
      <label
        htmlFor={name}
        className={`block text-base font-bold p-1 ml-4 min-h-2.5 cursor-pointer ${classNamelabel} ${estado.valido === "true" ? "text-exito" : ""} ${estado.valido === "false" ? "text-error" : ""}`}
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
          className={`input-placeholder w-full text-sm bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] pr-[40px] pl-[40px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] ${classNameInput} ${estado.valido === "false" ? "border-error focus:border-error" : ""}`}
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
        className={`text-sm text-error mb-0 mt-2 ml-3 mr-3 opacity-0 ${estado.valido === "false" ? "opacity-100" : ""}`}
      >
        {errorMsm}
      </p>
    </div>
  );
};

export default InputRegistros;
