<script setup>
import { useRoute } from 'vue-router';
import { BBookItem } from '../components';

const route = useRoute();
const user = route.meta.user;
const bbooks = route.meta.bbooks;


</script>
<template>
    <h1 v-if="!(user && user.email)" class="p-5 text-center text-gray-600 font-bold dark:text-white">
        Vui lòng đăng nhập trước.
    </h1>
    <div v-if="user && user.email" class="relative">
        <h1 v-if="bbooks.length == 0" class="p-5 text-center text-gray-600 font-bold dark:text-white">
            Chưa có sách đã mượn.
        </h1>
        <div v-if="bbooks.length > 0" class="mt-10 ">
            <p class="text-green-700 font-bold dark:text-white">Sách đã mượn</p>
            <ul class="sm:w-1/2 flex flex-wrap gap-5 w-fit">
                <BBookItem v-for="bbook in bbooks" :key="bbook.bid" :bbook="bbook" />
            </ul>
        </div>

    </div>
</template>