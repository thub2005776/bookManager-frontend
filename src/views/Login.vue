<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleSubmit = (e) => {
  e.preventDefault();
  const values = {
    "email": email.value,
    "password": password.value,
  };

  axios.defaults.withCredentials = true;
  axios.post('http://localhost:3000/api/log/u/login', values)
    .then(res => {
      if (res.data.permission === "user") {
          router.push('/');
      } else {alert(res.data)}
    })
    .catch (err => console.log(err))
}
</script>

<template>
  <div class="mt-20">
    <form @submit="handleSubmit"
      class="max-w-sm mx-auto p-4 border border-blue-500   dark:border-gray-500 rounded-md">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input type="email" id="email" v-model="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@gmail.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Mật khẩu
        </label>
        <input type="password" id="password" v-model="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required />
      </div>
      
      <div class="flex justify-center gap-4">
        <button type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Đăng nhập
        </button>
        <router-link to="/register">
          <button type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Đăng ký
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>
