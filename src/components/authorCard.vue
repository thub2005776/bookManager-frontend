<template>
    <div class="w-fit p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center ">
            <img class="w-24 h-24 mb-2 rounded-full shadow-lg"
                src="https://i.pinimg.com/564x/1b/b1/5e/1bb15e0d93cd480665a992b50ce05c13.jpg" alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div class="flex mt-4 md:mt-3">
                <router-link to="/author/187">
                <p class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Tác phẩm
                </p>
                </router-link>
            </div>
        </div>
    </div>
</template>