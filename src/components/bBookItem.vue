<script setup>
import { ref } from 'vue';
import { BookModal } from '../components';
const props = defineProps({
    bbook: Object
});

const closed = ref(false);
const handleClosed = (e) => {
    closed.value = e;
}
</script>

<template>
    <li class="w-52 py-3 sm:py-4 hover:cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded-md">
        <div @click="handleClosed(false)" class="flex gap-5 items-center">
            <div class="flex-shrink-0">
                <img class="w-8 rounded-lg" :src="`http://localhost:3000/${props.bbook.img}`" alt="book">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ props.bbook.title }}
                </p>
                <time class="block float-right mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                    {{ new Date(props.bbook.borrowDate).toLocaleDateString() }}
                </time>
            </div>
        </div>
        <div v-if="!closed" class="absolute  top-0 lg:right-5 right-0">
            <BookModal :bbook="bbook" @closed="handleClosed" />
        </div>
    </li>
</template>