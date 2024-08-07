import { Link } from "react-router-dom";
import ButtonBasic from "./ButtonBasic";

const CardGeneral = (props) => {
  const {
    title,
    description,
    className,
    onClickOne,
    onClickTwo,
    descButtonOne,
    descButtonTwo,
  } = props;
  return (
    <div className="flex flex-grow flex-wrap gap-5 m-4 justify-center dark:bg-neutral-900">
      <div className="min-h-full flex items-center justify-center w-full">
        <div className="bg-gray-100 border-2 border-green-700 p-8 rounded-lg shadow-lg max-w-md w-full dark:bg-neutral-800">
          <h1 className="text-green-700 text-4xl font-bold mb-4 dark:text-white text-center">
            {title}
          </h1>
          <p className="text-gray-600 mb-6 dark:text-gray-100 text-center">
            {description}
          </p>
          <div className="flex flex-wrap justify-center">
            <ButtonBasic
              className={"text-white bg-green-700 m-2"}
              onClick={onClickOne}
            >
              {descButtonOne ? descButtonOne : `Registrar ${title}`}
            </ButtonBasic>
            <ButtonBasic
              className={"text-white bg-green-700 m-2"}
              onClick={onClickTwo}
            >
              {descButtonTwo ? descButtonTwo : `Listar ${title}`}
            </ButtonBasic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGeneral;
