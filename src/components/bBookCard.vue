<script setup>
const props = defineProps({
    book: Object,
});


const brrDate = new Date(props.book.borrowDate);
const returnDate = new Date(props.book.borrowDate);
returnDate.setDate(returnDate.getDate() + 14);
const today = new Date();
const late = returnDate.getDate() - today.getDate();

</script>

<template>
    <div class="w-46 h-62 p-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <router-link :to="`/book/${book.bid ? book.bid : book._id}`">
            <img class="w-44 h-52 rounded-t-lg" :src="`http://localhost:3000/${book.img}`" alt="" />
            <div class="p-2">
                <a href="#">
                    <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ book.title }}
                    </h5>
                </a>
                <div v-if="book.quantity">
                    <div>
                        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                            Số lượng mượn: {{ book.quantity }}
                        </p>
                        <p>
                            {{ brrDate.toLocaleDateString() + ' - ' }} <span>{{ book.returnDate ? new
                                Date(book.returnDate).toLocaleDateString()
                                : returnDate.toLocaleDateString() }}</span>
                        </p>
                    </div>
                    <div>
                        <span v-if="book.returned && late > 0"
                            class="bg-red-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                            Đã mượn
                        </span>
                        <span v-if="!book.returned"
                            class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            {{ book.returnDate ? "Đang chờ duyệt" : "Thời hạn: " + late + " ngày" }}
                        </span>
                        <span v-if="!book.returned && late <= 0"
                            class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                            Trễ hạn
                        </span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>