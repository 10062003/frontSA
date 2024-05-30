import { CircleCheck, CircleX } from "lucide-react";

const RegistroUpa = () => {
  return (
    <main className="max-w-4xl w-10/12 m-auto p-10">
      <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="block font-bold p-2.5 min-h-10 cursor-pointer"
          >
            Nombre
          </label>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              className="border p-2 rounded w-full"
            />
            <CircleCheck className=" text-" />
          </div>
          <p>Un mensaje chido</p>
        </div>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            className="border p-2 rounded w-full"
          />
          <p>Un mensaje chido</p>
        </div>
      </form>
    </main>
  );
};

export default RegistroUpa;
