<script setup>
const props = defineProps({
    book: Object
})
</script>

<template>
        <div class="w-44 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <router-link :to="`/book/${props.book._id}`">
                <img class="w-44 h-60 rounded-t-lg" :src="`http://localhost:3000/${book.img}`" alt="" />
                <div class="p-2">
                    <p class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-wrap">
                        {{ props.book.title }}
                    </p>
                    <p class="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400 text-wrap">
                        {{ props.book.author}}
                    </p>
                </div>
            </router-link>
        </div>
</template>