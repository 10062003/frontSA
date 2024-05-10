const Card = (props) => {
  return(

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/public/imgs/lombricultivo.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Módulo Lombricultivo</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aqui va una breve descripción sobre el módulo.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Ingresar
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  )
}
export default Card