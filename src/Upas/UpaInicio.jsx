import Button from "../components/ui/Button";

const UpaInicio = () => {
  return (
    <div className="bg-gray-100 flex flex-grow flex-wrap gap-5 m-4 justify-center dark:bg-neutral-900">
      <div className="min-h-full flex items-center justify-center w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full dark:bg-neutral-700">
          <h1 className="text-5xl font-semibold mb-4 dark:text-white">Upas</h1>
          <p className="text-gray-600 mb-6 dark:text-gray-100">
            Bienvido a la sección de Upas (Unidad productiva agropecuaría), aquí
            podrás registrar y buscar Upas.
          </p>
          <div className="flex flex-wrap justify-center">
            <Button className={"bg-green-700 text-white"}>Registrar Upa</Button>
            <Button className={"bg-green-700 text-white"}>Buscar Upa</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpaInicio;
