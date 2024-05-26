import { Link } from "react-router-dom";
import Button from "./Button";

const CardGeneral = (props) => {
  const { title, description, className, onClickOne, onClickTwo } = props;
  return (
    <div className="bg-gray-200 flex flex-grow flex-wrap gap-5 m-4 justify-center dark:bg-neutral-900">
      <div className="min-h-full flex items-center justify-center w-full">
        <div className="bg-gray-100 border-2 border-green-700 p-8 rounded-lg shadow-lg max-w-md w-full dark:bg-neutral-700">
          <h1 className="text-green-700 text-4xl font-bold mb-4 dark:text-white text-center">
            {title}
          </h1>
          <p className="text-gray-600 mb-6 dark:text-gray-100">{description}</p>
          <div className="flex flex-wrap justify-center">
            <Button className={"bg-green-700"} onClick={onClickOne}>
              Registrar {title}
            </Button>
            <Button className={"bg-green-700"} onClick={onClickTwo}>
              Listar {title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGeneral;
