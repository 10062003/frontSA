import React from "react";
import { CircleCheck, CircleX } from "lucide-react";

const SeleccionConValidacion = ({
  label,
  classNamelabel,
  name,
  errorMsm,
  estado,
  icon, // Icono que se muestra en el input
  cambiarEstado,
  opciones, // Lista de opciones para el dropdown
}) => {
  const validacion = (valor) => {
    if (valor !== "") {
      if (valor !== "Seleccione una opción") {
        cambiarEstado({ campo: valor, valido: "true" });
      } else {
        cambiarEstado({ campo: valor, valido: "false" });
      }
    } else {
      cambiarEstado({ campo: valor, valido: "false" });
    }
  };

  return (
    <div className="text-green-700">
      <label
        htmlFor={name}
        className={`block text-base font-medium p-1 ml-4 min-h-2.5 cursor-pointer dark:text-white ${classNamelabel} ${estado.valido === "true" ? "text-exito" : ""} ${estado.valido === "false" ? "text-error" : ""}`}
      >
        {label}
      </label>
      <div className="flex relative justify-center items-center ">
        <select
          name={name}
          value={estado.campo}
          className={`w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] pl-[40px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100 ${estado.valido === "false" ? "border-error focus:border-error text-black" : ""} ${estado.valido === "true" ? "border-exito focus:border-exito text-black" : ""} ${estado.valido === null ? "text-neutral-400" : ""}`}
          onChange={(e) => {
            const valor = e.target.value;
            cambiarEstado({ campo: valor });
            validacion(valor);
          }}
          onBlur={(e) => validacion(e.target.value)}
        >
          <option className="" value="" disabled>
            Seleccione una opción
          </option>
          {opciones.map((opcion, index) => (
            <option key={index} value={opcion.campo}>
              {opcion.label}
            </option>
          ))}
        </select>
        <span className="absolute left-2">{icon}</span>
        <CircleCheck
          className={`absolute text-base right-6 z-[100] ${estado.valido === "true" ? "opacity-100 text-exito" : "opacity-0"}`}
        />
        <CircleX
          className={`absolute text-base right-6 z-[100] ${estado.valido === "false" ? "opacity-100 text-error" : "opacity-0"}`}
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

export default SeleccionConValidacion;
