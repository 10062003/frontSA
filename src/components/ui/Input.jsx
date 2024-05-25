const Input = (props) => {
  return (
    <input
      // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-9"

      className="border-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-base font-normal focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 text-sm pl-11 dark:bg-neutral-800 dark:text-white dark:border-green-500"
      {...props}
    />
  );
};

export default Input;
