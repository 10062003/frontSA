import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button = ({ children, className, link, ...props }) => {
  return (
    <button
      className={`flex sm:w-2/4 m-2 w-full h-10 justify-center rounded-md border-2 border-green-600 px-3 py-1.5 text-lg font-semibold leading-6 text-black shadow-sm bg-green-600 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:text-white dark:bg-green-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.object,
};

export default Button;
