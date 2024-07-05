const Card = (props) => {
  const { title, description, imgSrc } = props;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 flex flex-col">
      <a href="#">
        <div
          className="relative overflow-hidden rounded-t-lg"
          style={{ paddingBottom: "56.25%" }}
        >
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={imgSrc}
            alt="Imagen de la card"
          />
        </div>
      </a>
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="mt-auto">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Ingresar
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
