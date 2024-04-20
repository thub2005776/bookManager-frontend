<script setup>
import { ref } from 'vue';
import borrowedBookService from '@/services/borrowedBook.service';

const props = defineProps({
    bbook: Object
});

const borrowDate = new Date(props.bbook.borrowDate);
const returnDate = new Date(props.bbook.borrowDate);
returnDate.setDate(returnDate.getDate() + 14);

const emit = defineEmits(['closed', 'returnBook']);

const handleClosed = () => {
    emit('closed', true);
}

const returned = ref(props.bbook.state);
const handleReturnBook = async () => {
    const brrBook = await borrowedBookService.update(props.bbook._id, {returnDate: Date(), state: "Đang chờ duyệt"});
    if (brrBook) {
        returned.value = brrBook.state;
        window.location.reload();
    }
}

const handleCancelBook = async()  => {
    const brrBook = await borrowedBookService.update(props.bbook._id, {state: 'Yêu cầu hủy'});
    if (brrBook) {
        returned.value = brrBook.state;
        window.location.reload();
    }
}
</script>
<template>
    <div id="default-modal" tabindex="-1" aria-hidden="true"
        class=" overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Thông tin sách
                    </h3>
                    <button type="button" @click="handleClosed"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                    <div class=" flex justify-center gap-5">
                        <img class="lg:w-44 w-32 p-1 rounded-md border border-blue-300 dark:border-gray-600"
                            :src="`http://localhost:3000/${props.bbook.img}`" alt="book">

                        <div>
                            <dl
                                class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                <div class="flex flex-col">
                                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                        Tên sách
                                    </dt>
                                    <dd class="text-lg font-semibold">{{ props.bbook.title }}</dd>
                                </div>
                                <div class="flex flex-col mb-6">
                                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                        Số lượng
                                    </dt>
                                    <dd class="text-lg font-semibold">{{ props.bbook.quantity }}</dd>
                                </div>

                                <ol class="items-center sm:flex ">
                                    <li class="relative mb-6 sm:mb-0 p-2 rounded-s-lg">
                                        <div class="flex items-center">
                                            <div
                                                class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <div class="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-white"></div>
                                        </div>
                                        <div class="mt-3 sm:pe-8">
                                            <time
                                                class="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                                                {{ borrowDate.toLocaleDateString() }}
                                            </time>

                                        </div>
                                    </li>
                                    <li class="relative mb-6 sm:mb-0 p-2 rounded-e-lg">
                                        <div class="flex items-center">
                                            <div
                                                class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <div class="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-white"></div>
                                        </div>
                                        <div class="mt-3 sm:pe-8">
                                            <time
                                                class="block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                                                {{ returnDate.toLocaleDateString() }}
                                            </time>
                                        </div>
                                    </li>
                                </ol>
                            </dl>
                        </div>
                    </div>
                </div>
                <div v-if="props.bbook.state != 'Đã trả' || props.bbook.state != 'Đã hủy'" >
                    <div v-if="!props.bbook.returnDate && bbook.state == 'Đang mượn'">
                        <button  type="button" @click="handleReturnBook"
                        class="ml-2 mx-auto text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Xác nhận trả sách
                    </button>
                    <button  type="button" @click="handleCancelBook"
                        class="ml-2 mx-auto text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Hủy mượn sách
                    </button>
                    </div>
                    
                    <div v-if="returned == 'Đang chờ duyệt' || returned == 'Yêu cầu hủy'" type="button" disabled
                        class="text-center w-full bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                        {{ returned }}
                    </div>
                </div>
                <div v-if="props.bbook.state == 'Đã trả'" type="button"
                        class="text-center w-full bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                        Trả sách thành công
                </div>
                <div v-if="props.bbook.state == 'Đã hủy'" type="button"
                        class="text-center w-full bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Hủy mượn sách thành công
                </div>
            </div>
        </div>
    </div>
</template>