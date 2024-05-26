import PropTypes from "prop-types";

const Label = ({ children, className, props }) => {
  return (
    <label
      className={`block text-sm font-semibold leading-6 text-gray-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object, // Puedes especificar otros tipos según las propiedades que esperes
};

export default Label;
