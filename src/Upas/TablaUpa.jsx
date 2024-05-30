const TablaUpa = () => {
  return(

      <section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th class="px-4 py-3">Nombre</th>
                  <th class="px-4 py-3">Edad</th>
                  <th class="px-4 py-3">Estado</th>
                  <th class="px-4 py-3">Fecha</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="text-gray-700">
                  <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                      <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-8 h-10 rounded-full" src="./public/imgs/yo.png" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p class="font-semibold text-black">Kevin Holguin</p>
                        <p class="text-xs text-gray-600">Super administrador</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">21</td>
                  <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Activo </span>
                  </td>
                  <td class="px-4 py-3 text-sm border">30/01/2003</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                      <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-8 h-10 rounded-full" src="./public/imgs/Daniel.png" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p class="font-semibold text-black">Daniel Paternina</p>
                        <p class="text-xs text-gray-600">Super administrador</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">20</td>
                  <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Inactivo </span>
                  </td>
                  <td class="px-4 py-3 text-sm border">06/10/2003</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
  )
}
export default TablaUpa