<script setup>
const props = defineProps({
    bbook: Object
});

const emit = defineEmits(['bookModal']);

const handleShow = (bbook) => {
    emit('bookModal', bbook);
}
</script>

<template>
    <li v-if="bbook.state != 'Đã hủy'">
        <div @click="handleShow(bbook)" 
            class="flex gap-5 items-center w-52 py-3 sm:py-4 hover:cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded-md">
            <div class="flex-shrink-0">
                <img class="w-8 rounded-lg" :src="`http://localhost:3000/${props.bbook.img}`" alt="book">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ props.bbook.title }}
                </p>
                <time class="block float-right mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                   Ngày mượn: {{ new Date(props.bbook.borrowDate).toLocaleDateString() }}
                </time>
            </div>
        </div>
    </li>
</template>