<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';

let file = null;
const name = ref('');
const email = ref('');
const password = ref('');
const repeatPassword = ref('');
const address = ref('');

let uploaded = '';
const handleChange = (e) => {
  file = e.target.files[0];
  uploaded = URL.createObjectURL(file);
}


let error = {
  "name": '',
  "email": '',
  "password": '',
  "repeatPassword": '',
}
const validation = () => {
  const emailRegExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const passwordRedExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (name.value.length > 50) {
    error.name = 'Tên không dài hơn 50 ký tự.';
  }

  if (!emailRegExp.test(email.value)) {
    error.email = 'Email không hợp lệ.';
  } else error.email = '';

  if (!passwordRedExp.test(password.value)) {
    error.password = 'Mật khẩu phải gồm ký tự HOA, thường, chữ số và ký tự đặc biệt.';
  } else error.password = '';

  if (password.value.trim() !== repeatPassword.value.trim()) {
    error.repeatPassword = 'Mật khẩu không khớp.';
  } else error.repeatPassword = '';

}


const handleSubmit = (e) => {
  e.preventDefault();

  const values = {
    "name": name.value,
    "email": email.value,
    "password": password.value,
    "permission": 'user',
  }

  const data = new FormData();
  data.append("file", file);

  values.img = file.name;
  axios.post('http://localhost:3000/api/file/upload', data)
    .then(res => {
      if (res.status === 200) {
        console.log(res.data);
      }
    })
    .catch(err => console.log(err))

  axios.post('http://localhost:3000/api/users', values)
    .then(res => {
      alert("Đăng ký thành công!");
      router.push('/login');
    })
    .catch(err => console.log(err))
}

</script>

<template>
  <div class="mt-20">
    <h1 class="text-green-700 dark:text-white font-bold text-center text-2xl mb-6">
      Đăng ký
    </h1>
    <div class="flex justify-center gap-5">
      <div class="relative lg:mt-10">
        <img v-if="uploaded"
          class="w-32 h-32 md:w-52 md:h-52 rounded-full p-1 border border-blue-300 dark:border-gray-600" :src="uploaded"
          alt="avatar">
      </div>
      <form class="w-1/2 p-4  rounded-md dark:bg-gray-900" @submit="handleSubmit">
        <div class="mb-5">
          <label for="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ảnh đại diện
          </label>
          <input type="file" id="file" @change="handleChange" accept="image/*" required
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <input type="text" hidden />

        <div class="mb-5">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tên
          </label>
          <input type="name" id="name" v-model="name" @change="validation"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
          <p class="text-sm text-red-500 dark:text-red-600">{{ error.name }}</p>
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input type="email" id="email" v-model="email" @change="validation"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@gmail.com" required />
          <p class="text-sm text-red-500 dark:text-red-600">{{ error.email }}</p>
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Mật khẩu
          </label>
          <input type="password" id="password" v-model="password" @change="validation"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required />
          <p class="text-sm text-red-500 dark:text-red-600">{{ error.password }}</p>
        </div>
        <div class="mb-5">
          <label for="repeatPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nhập lại mật khẩu
          </label>
          <input type="password" id="repeatPassword" v-model="repeatPassword" @change="validation"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required />
          <p class="text-sm text-red-500 dark:text-red-600">{{ error.repeatPassword }}</p>
        </div>
        <div class="mb-5">
          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nhập Địa chỉ
          </label>
          <textarea type="password" id="address" v-model="address" @change="validation"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required></textarea>
        </div>
        <div class="flex justify-center gap-4">
          <button type="submit"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  </div>
</template>