<script setup>
import { BookCard } from '@/components';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = route.meta.user;
const books = route.meta.books;
const bbooks = route.meta.bbooks;
</script>

<template>
    <div class="mt-5 text-green-700 dark:text-white">
        <h1 class="font-bold text-2xl text-center mb-6">Thông tin tài khoản</h1>
        <div class="lg:flex lg:gap-6 p-2 dark:bg-gray-800 ">
            <div class="text-center">
                <img class="mx-auto w-32 h-32 md:w-52 md:h-52 rounded-full p-1 border border-blue-300 dark:border-gray-600"
                    :src="`http://localhost:3000/${user.img}`" alt="avatar">
                <p class="mb-2">{{ user.name }}</p>
                <p class="mb-3 dark:text-gray-400">{{ user.email }}</p>
                <router-link :to="`/editprofile/${user._id}`">
                    <button type="button"
                        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Cập nhật hồ sơ
                    </button>
                </router-link>
            </div>
            <div>
                <div class="mb-6">
                    <h1 class="font-bold text-lg mb-6">Sách đang mượn</h1>
                    <p class="text-center text-gray-500">
                        Chưa có sách đang mượn
                        {{ borrowedBooks }}
                    </p>
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
                <div class="mb-6">
                    <h1 class="font-bold text-lg mb-6">Sách đã mượn</h1>
                    <p class="text-center text-gray-500">
                        Chưa có sách đã mượn
                        {{ borrowedBooks }}
                    </p>
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
            </div>
        </div>
        <div>
            <h1 class="font-bold text-lg my-2">Danh sách yêu thích</h1>
            <p v-if="user.favorite.length == 0" class="text-center text-gray-500">
                Chưa có sách trong danh sách yêu thích
            </p>
            <BookCard v-if="user.favorite.length > 0" v-for="book in user.favorite"></BookCard>
        </div>
    </div>
</template>