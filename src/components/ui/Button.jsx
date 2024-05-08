import PropTypes from "prop-types";

const Button = ({ children, props }) => {
  return (
    <button
      className="flex sm:w-2/4 w-full h-10 justify-center rounded-md border-2 border-green-600 px-3 py-1.5 text-lg font-semibold leading-6 text-black shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:text-white"
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object, // Puedes especificar otros tipos según las propiedades que esperes
};

export default Button;
