<template>
<footer class="rounded-lg shadow bg-gray-200 dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <router-link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Books</span>
            </router-link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <router-link to="/about" class="hover:underline me-4 md:me-6">Về chúng tôi</router-link>
                </li>
                <li>
                    <router-link to="/" class="hover:underline me-4 md:me-6">Chính sách</router-link>
                </li>
                <li>
                    <router-link to="/" class="hover:underline">Liên hệ</router-link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Books. All Rights Reserved.</span>
    </div>
</footer>


</template>