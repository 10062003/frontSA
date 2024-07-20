import PropTypes from "prop-types";

const LabelInput = ({ children, className, props }) => {
  return (
    <label
      className={`block text-sm font-semibold leading-6 text-gray-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

LabelInput.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object, // Puedes especificar otros tipos según las propiedades que esperes
};

export default LabelInput;
