import PropTypes from "prop-types";

const ButtonBasic = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex m-2 h-10 justify-center rounded-md border-2 border-green-600 px-3 py-1.5 text-lg font-semibold leading-6 text-black shadow-sm bg-green-600 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:text-white dark:bg-green-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

ButtonBasic.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ButtonBasic.defaultProps = {
  className: "",
};

export default ButtonBasic;
