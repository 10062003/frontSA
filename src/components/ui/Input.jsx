const Input = (props, className) => {
  return (
    <input
      className={`border-2 appearance-none text-slate-900 bg-slate-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-base font-normal focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 text-sm pl-11 dark:bg-neutral-800 dark:text-white dark:border-green-500 ${className}`}
      {...props}
    />
  );
};

export default Input;
