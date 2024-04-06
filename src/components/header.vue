<script setup>
import axios from 'axios';
import { ref } from 'vue';
import router from '@/router';

const email = ref('');
const auth = ref({});
axios.defaults.withCredentials = true;
axios.get("http://localhost:3000/api/log/u/token")
  .then(res => {
    if (res.data.Status === "Success") {
      email.value = res.data.email;
      axios.get(`http://localhost:3000/api/users/email/${email.value}`)
        .then(res => {
          if (res.status === 200) {
            auth.value = res.data;
          } else { console.log(res.status); }
        })
        .catch(err => console.log(err))
    }
  })
  .catch(err => console.log(err))

const handleLogout = () => {
  axios.get("http://localhost:3000/api/log/u/logout")
      .then(res => {
         auth.value = null;
         router.push('/');
      }).catch(err => console.log(err));
}
</script>

<template>
  <div class="z-[100] fixed top-0 w-full bg-white dark:bg-gray-900 border-gray-200 shadow shadow-">
    <nav class="mx-5">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/">
          <h3 class="self-center text-2xl font-extrabold whitespace-nowrap text-blue-500">Books</h3>
        </RouterLink>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div v-if="!(auth && auth.email)">
            <router-link to="/login">
              <button type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Đăng nhập
              </button>
            </router-link>
          </div>
          <div v-if="auth && auth.email" class="flex gap-4 justify-end">
            <button type="button" @click="handleLogout"
                class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Đăng xuất
              </button>
          <router-link :to="`/profile/${auth._id}`">
             <img class="w-10 h-10 me-10 rounded-full" 
          :src="`http://localhost:3000/${auth.img}`" alt="avatar">
          </router-link>
           
          </div>

          <button data-collapse-toggle="navbar-cta" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <router-link to="/categories">
                <div
                  class="block py-2 px-3 font-bold md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 dark:text-white md:dark:hover:bg-transparent ">
                  Thể loại
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/borrowedbook">
                <div
                  class="block py-2 px-3 font-bold md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 dark:text-white md:dark:hover:bg-transparent ">
                  Sách đã mượn
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>