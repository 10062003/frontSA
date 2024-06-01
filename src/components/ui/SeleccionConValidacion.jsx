import React from "react";
import { CircleCheck, CircleX } from "lucide-react";

const SeleccionConValidacion = ({
  label,
  classNamelabel,
  name,
  errorMsm,
  estado,
  cambiarEstado,
  opciones, // Lista de opciones para el dropdown
}) => {
  const validacion = (valor) => {
    if (valor !== "") {
      if (valor !== "Seleccione una opción") {
        cambiarEstado({ campo: valor, valido: "true" });
        console.log("bien");
        console.log(valor);
      } else {
        cambiarEstado({ campo: valor, valido: "false" });
        console.log("mal");
      }
    } else {
      cambiarEstado({ campo: valor, valido: "false" });
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
        <select
          name={name}
          value={estado.campo}
          className={`w-full text-sm bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] ${estado.valido === "false" ? "border-error focus:border-error" : ""} ${estado.valido === "true" ? "border-exito focus:border-exito" : ""}`}
          onChange={(e) => {
            const valor = e.target.value;
            cambiarEstado({ campo: valor });
            validacion(valor);
          }}
          onBlur={(e) => validacion(e.target.value)}
        >
          <option value="" disabled>
            Seleccione una opción
          </option>
          {opciones.map((opcion, index) => (
            <option key={index} value={opcion.campo}>
              {opcion.label}
            </option>
          ))}
        </select>
        <CircleCheck
          className={`absolute text-base right-6 z-[100] ${estado.valido === "true" ? "opacity-100 text-exito" : "opacity-0"}`}
        />
        <CircleX
          className={`absolute text-base right-6 z-[100] ${estado.valido === "false" ? "opacity-100 text-error" : "opacity-0"}`}
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

export default SeleccionConValidacion;
