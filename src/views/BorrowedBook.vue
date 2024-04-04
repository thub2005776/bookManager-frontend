<script setup>
import { useRoute } from 'vue-router';
import { BookCard } from '../components';

const route = useRoute();
const books = route.meta.books;
</script>
<template>
    <div class="float-left top-32">
      <p class="text-green-700 font-bold dark:text-white">Sách đang mượn</p>
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700 bg-gray-100 dark:bg-gray-700 rounded-md">
        <li class="py-3 sm:py-4 hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded-md">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src="https://i.pinimg.com/564x/27/f6/b9/27f6b998fcee836657a86a18e2a226d0.jpg" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Lana Byrd
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                    </p>
                </div>
                <div class="inline-flex items-center">
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Mới
                    </span>
                </div>
            </div>
        </li>
        <li class="py-3 sm:py-4 hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded-md">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src="https://i.pinimg.com/564x/cb/18/3c/cb183cead26e1f7809141d06d40a2c9d.jpg" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Thomas Lean
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                    </p>
                </div>
                <div class="inline-flex items-center">
                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                       Sắp đến hạn
                    </span>
                </div>
            </div>
        </li>
        <li class="py-3 sm:py-4 hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded-md">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src="https://i.pinimg.com/564x/27/f6/b9/27f6b998fcee836657a86a18e2a226d0.jpg" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Lana Byrd
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                    </p>
                </div>
                <div class="inline-flex items-center">
                    <span class="bg-red-400 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                        Trễ hạn
                    </span>
                </div>
            </div>
        </li>
    </ul>  
    </div>
    

    <div class="">
        <h1 class="text-green-500 font-bold text-2xl dark:text-white text-center mb-6">Thông tin sách</h1>
        <div class=" flex justify-center gap-5">
            <img class="lg:w-72 w-64 p-1 rounded-md border border-blue-300 dark:border-gray-600"
                src="https://i.pinimg.com/564x/0e/43/e0/0e43e0d82f125c17761b0e2a859c05ca.jpg" alt="book">

            <div>
                <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div class="flex flex-col pb-3">
                        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                            Tên sách
                        </dt>
                        <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
                    </div>
                    <div class="flex flex-col py-3">
                        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                            Tác giả
                        </dt>
                        <dd class="text-lg font-semibold">92 Miles Drive</dd>
                    </div>

                    <ol class="items-center sm:flex mt-6">
                        <li class="relative mb-6 sm:mb-0 bg-gray-300 dark:bg-gray-700 p-2 rounded-s-lg">
                            <div class="flex items-center">
                                <div
                                    class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-white"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Library
                                    v1.0.0
                                </h3>
                                <time
                                    class="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-700">
                                    Released on December 2, 2021
                                </time>

                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0 bg-yellow-300 dark:bg-yellow-500 p-2 rounded-e-lg">
                            <div class="flex items-center">
                                <div
                                    class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-white"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Library
                                    v1.2.0
                                </h3>
                                <time
                                    class="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-700">
                                    Released
                                    on December 23, 2021</time>

                            </div>
                        </li>
                    </ol>
                </dl>


                <button type="button"
                    class="mt-6 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Xác nhận trả sách
                </button>
            </div>
        </div>
    </div>
</template>