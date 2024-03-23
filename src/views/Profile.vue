<script setup>
import { BookCard } from '@/components';
</script>

<template>
    <div class="text-green-700 dark:text-white">
        <h1 class="font-bold text-2xl text-center mb-6">Thông tin tài khoản</h1>
        <div
            class="lg:flex lg:gap-6 bg-blue-100 p-2 rounded-md border border-blue-300 dark:bg-gray-800 dark:border-gray-600 ">
            <div class="text-center">
                <img class="w-32 h-32 md:w-52 md:h-52 rounded-full p-1 border border-blue-300 dark:border-gray-600"
                    src="https://i.pinimg.com/736x/f5/a3/8d/f5a38ddc194c4717bcea5190759fd206.jpg" alt="avatar">
                <p class="mb-2">Name</p>
                <p class="mb-3 dark:text-gray-400">Email</p>
                <router-link to="/editprofile/123">
                     <button type="button"
                    class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Cập nhật hồ sơ
                </button>
                </router-link>
               
            </div>
            <div class="flex-1">
                <!-- Borrowing Book  -->
                <div class="mb-6">
                    <h1 class="font-bold text-lg mb-6">Sách đang mượn</h1>
                    <ol class="items-center sm:flex">
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div
                                    class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0
                                </h3>
                                <time
                                    class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released
                                    on December 2, 2021</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with
                                    dozens of
                                    web components and interactive elements.</p>
                            </div>
                        </li>

                    </ol>
                </div>
                <!-- Borrowing Book end -->

                <!-- Borrowed Book  -->
                <div class="mb-6">
                    <h1 class="font-bold text-lg mb-6">Sách đã mượn</h1>
                    <ol class="items-center sm:flex">
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div
                                    class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0
                                </h3>
                                <time
                                    class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released
                                    on December 2, 2021</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with
                                    dozens of
                                    web components and interactive elements.</p>
                            </div>
                        </li>

                    </ol>
                </div>
                <!-- Borrowed Book end -->

            </div>
        </div>
        <div>
            <h1 class="font-bold text-lg text-center my-2">Danh sách yêu thích</h1>
            <BookCard></BookCard>
        </div>

    </div>
</template>