<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { BBookItem, BookModal } from '../components';

const route = useRoute();
const user = route.meta.user;
const bbooks = route.meta.bbooks;

const book = ref(false);
const handleShow = (bbook) => {
    book.value = bbook;
}

const handleClosed = () => {
    book.value = false;
}

</script>
<template>
    <h1 v-if="!(user && user.email)" class="p-5 text-center text-gray-600 font-bold dark:text-white">
        Vui lòng đăng nhập trước.
    </h1>
    <div v-if="user && user.email" class="relative">
        <h1 v-if="bbooks.length == 0" class="p-5 text-center text-gray-600 font-bold dark:text-white">
            Chưa có sách đã mượn.
        </h1>
        <div v-if="bbooks.length > 0" class="mt-10 relative">
            <p class="text-green-700 font-bold dark:text-white">Sách đã mượn</p>
            <div class="w-[50%]">
                <ul class=" flex flex-wrap gap-5 w-fit">
                    <BBookItem v-for="bbook in bbooks" :key="bbook.bid" :bbook="bbook" @book-modal="handleShow" />
                </ul>
            </div>
            <div v-if="book" class="absolute top-0 lg:right-5 right-0">
                <BookModal :bbook="book" @closed="handleClosed" />
            </div>
        </div>
    </div>
</template>