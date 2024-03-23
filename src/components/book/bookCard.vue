<script setup>

</script>

<template>
    <div>
        <div class="w-fit p-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <router-link to="/book/1234">
                <img class="w-44 rounded-t-lg"
                    src="https://i.pinimg.com/564x/88/b0/5b/88b05b4bb6929702b8b441db91ca3032.jpg" alt="" />
                <div class="p-2">
                    <a href="#">
                        <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">nnn</h5>
                    </a>
                    <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">mmm.</p>
                    <a href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Chi tiết
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </router-link>
        </div>
    </div>
</template>