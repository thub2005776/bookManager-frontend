<script setup>
import { useRoute } from 'vue-router';
import { BookCard } from '../components';

const route = useRoute();
const books = route.meta.books;
const categories = ['Ngôn tình', 'Văn học Việt Nam', 'Lịch sử Việt Nam', 'Giáo trình'];
const book0 = books.filter(f => f.category == categories[0]);
const book1 = books.filter(f => f.category == categories[1]);
const book2 = books.filter(f => f.category == categories[2]);
const book3 = books.filter(f => f.category == categories[3]);

</script>
<template>
  <div class="mb-6">
    <p class=" text-green-500 dark:text-white text-lg font-semibold mb-3">| {{ categories[0] }}</p>
    <div class="flex flex-wrap gap-4">
      <BookCard v-for="book in book0" :key="book._id" :book="book" />
    </div>
  </div>
  <div class="mb-6">
    <p class=" text-green-500 dark:text-white text-lg font-semibold mb-3">| {{ categories[1] }}</p>
    <div class="flex flex-wrap gap-4">
      <BookCard v-for="book in book1" :key="book._id" :book="book" />
    </div>
  </div>
  <div class="mb-6">
    <p class=" text-green-500 dark:text-white text-lg font-semibold mb-3">| {{ categories[2] }}</p>
    <div class="flex flex-wrap gap-4">
      <BookCard v-for="book in book2" :key="book._id" :book="book" />
    </div>
  </div>
  <div class="mb-6">
    <p class=" text-green-500 dark:text-white text-lg font-semibold mb-3">| {{ categories[3] }}</p>
    <div class="flex flex-wrap gap-4">
      <BookCard v-for="book in book3" :key="book._id" :book="book" />
    </div>
  </div>
</template>