const Input = (props, className) => {
  return (
    <input
      className={`input-placeholder w-full text-[13px] bg-white border-2 border-gray-300 rounded-md h-11 leading-[45px] px-[10px] pr-[40px] pl-[40px] transition-all duration-200 ease-in-out focus:border-blue-400 focus:outline-none focus:shadow-[3px_0px_30px_rgba(163,163,163,0.4)] dark:bg-neutral-800 dark:text-white dark:border-neutral-100 ${className}`}
      {...props}
    />
  );
};

export default Input;
