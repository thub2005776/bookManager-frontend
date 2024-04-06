<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

import userService from '@/services/user.service';
import borrowedBookService from '@/services/borrowedBook.service';
import router from '@/router';

const route = useRoute();
const id = route.params.id;
const books = route.meta.books;
const user = route.meta.user;

const book = books.find(f => f._id == id);
const favortie = ref(false);
const quantity = ref(0);

const handleFavorite = async () => {
    if (user) {
        const values = {
            'bid': book._id,
            'date': Date(),
        };
        const userFavorite = await userService.addFavorite(user._id, values);
        if (userFavorite) {
            favortie.value = !favortie.value;
        }
    } else { alert("Bạn nên đăng nhập trước!") }

}

const handleBorrowing = async (e) => {
    e.preventDefault();
    if (user) {
        if (quantity.value) {
            const values = {
                'uid': user._id,
                'bid': book._id,
                'quantity': quantity.value,
                'borrowDate': Date(),
                'returnDate': null,
            }
            const borrowed = await borrowedBookService.create(values);
            if (borrowed) {
                console.log(borrowed);
                alert("Mượn sách thành công!");
                router.push('/borrowedbook');
            }
        } else { alert("Chưa chọn số lượng sách muốn mượn!") }
    } else { alert("Bạn nên đăng nhập trước!") }
}
</script>

<template>
    <div>
        <h1 class="text-green-500 font-bold text-2xl dark:text-white text-center mb-6">
            Thông tin sách
        </h1>

        <div class="lg:grid lg:grid-cols-4">
            <div class="flex gap-3 md:gap-10 lg:col-span-3 ">
                <div class="relative">
                    <img class="lg:w-72 w-64 p-1 rounded-md border border-blue-300 dark:border-gray-600"
                        :src="`http://localhost:3000/${book.img}`" alt="book">
                    <div @click="handleFavorite"
                        class="absolute bottom-44 right-5 p-1 bg-white rounded-full hover:cursor-pointer">
                        <div v-if="!favortie">
                            <svg class="w-8 h-8 text-orange-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                        </div>
                        <div v-if="favortie">
                            <svg class="w-8 h-8 text-orange-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class=" pb-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Tên sách
                            </dt>
                            <dd class="text-lg font-semibold">{{ book.author }}</dd>
                        </div>
                        <div class="flex flex-col py-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Tác giả
                            </dt>
                            <dd class="text-lg font-semibold">{{ book.author }}</dd>
                        </div>
                        <div class="flex flex-col py-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Thể loại
                            </dt>
                            <dd class="text-lg font-semibold">{{ book.category }}</dd>
                        </div>
                        <div class="flex flex-col pt-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Lượt mượn
                            </dt>
                            <dd class="text-lg font-semibold">{{ book.borrowedTimes }}</dd>
                        </div>
                        <div class="flex flex-col pt-3">
                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                Số lượng
                            </dt>
                            <dd class="text-lg font-semibold">{{ book.stored }}</dd>
                        </div>
                    </dl>
                    <div class="text-center p-1 mb-1 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
                        role="alert">
                        <span class="font-medium">Ghi chú!</span> Sách phải được trả lại trong thời gian 2 tuần mượn.
                    </div>
                    <form @submit="handleBorrowing">
                        <div class="w-full p-2 border border-blue-400 dark:border-gray-600 rounded-lg">
                            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Chọn số lượng
                            </label>
                            <div class="flex gap-5 justify-center w-full">
                                <input type="number" id="quantity" pattern=".{\d}" :max="book.stored" v-model="quantity"
                                    class="h-fit shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                                <button type="submit"
                                    class="h-fit w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm p-2.5 text-center me-2 mb-2">
                                    Mượn sách
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="mt-6 lg:mt-0">
                <p class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Trích đoạn </p>
                <blockquote
                    class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
                        {{ book.excerpt }}
                    </p>
                </blockquote>
            </div>
        </div>
    </div>
</template>