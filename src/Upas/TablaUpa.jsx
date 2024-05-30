const TablaUpa = () => {
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full max-w-full table-auto">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-2 py-1 text-xs whitespace-nowrap sm:text-sm sm:px-4 sm:py-3">Nombre</th>
                <th className="px-2 py-1 text-xs whitespace-nowrap sm:text-sm sm:px-4 sm:py-3">Edad</th>
                <th className="px-2 py-1 text-xs whitespace-nowrap sm:text-sm sm:px-4 sm:py-3">Estado</th>
                <th className="px-2 py-1 text-xs whitespace-nowrap sm:text-sm sm:px-4 sm:py-3">Fecha</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="text-gray-700">
                <td className="px-2 py-1 text-xs whitespace-nowrap border sm:text-sm sm:px-4 sm:py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-8 h-10 rounded-full"
                        src="./public/imgs/yo.png"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Kevin Holguin</p>
                      <p className="text-xs text-gray-600">Super administrador</p>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-1 text-xs whitespace-nowrap font-semibold border sm:text-sm sm:px-4 sm:py-3">21</td>
                <td className="px-2 py-1 text-xs whitespace-nowrap border sm:text-sm sm:px-4 sm:py-3">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Activo
                  </span>
                </td>
                <td className="px-2 py-1 text-xs whitespace-nowrap border sm:text-sm sm:px-4 sm:py-3">30/01/2003</td>
              </tr>
              <tr className="text-gray-700">
                <td className="px-2 py-1 text-xs whitespace-nowrap border sm:text-sm sm:px-4 sm:py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-8 h-10 rounded-full"
                        src="./public/imgs/Daniel.png"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Daniel Paternina</p>
                      <p className="text-xs text-gray-600">Super administrador</p>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-1 text-xs whitespace-nowrap font-semibold border sm:text-sm sm:px-4 sm:py-3">20</td>
                <td className="px-2 py-1 text-xs whitespace-nowrap border sm:text-sm sm:px-4 sm:py-3">
                  <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Inactivo
                  </span>
                </td>
                <td className="px-2 py-1 text-xs whitespace-nowrap border sm:text-sm sm:px-4 sm:py-3">06/10/2003</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TablaUpa;