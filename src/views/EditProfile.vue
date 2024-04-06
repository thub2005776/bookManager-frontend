<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Delete from '@/components/delete.vue';
import axios from 'axios';
import userService from '@/services/user.service';

const route = useRoute();
const user = route.meta.user;
const showDeleted = ref(false);
const password = ref('');
const comfirmPassword = ref('');

let file = null;
let uploaded = '';
const handleChange = (e) => {
    file = e.target.files[0];
    uploaded = URL.createObjectURL(file);
}


const showDeletePopUp = (e) => {
    showDeleted.value = e;
}

const handleClosed = (e) => {
    showDeleted.value = !e;
}

const handleDeleted = async () => {
    const userDeleted = await userService.delete(user._id);
    console.log(userDeleted);
    alert("Đã xóa!");
    router.push('/');
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

    if (!emailRegExp.test(user.email)) {
        error.email = 'Email không hợp lệ.';
    } else error.email = '';

    if (!passwordRedExp.test(password.value)) {
        error.password = 'Mật khẩu phải gồm ký tự HOA, thường, chữ số và ký tự đặc biệt.';
    } else error.password = '';

    if (password.value.trim() !== comfirmPassword.value.trim()) {
        error.repeatPassword = 'Mật khẩu không khớp.';
    } else error.repeatPassword = '';

}

const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
        const data = new FormData();
        data.append("file", file);
        axios.post('http://localhost:3000/api/file/upload', data)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                }
            })
            .catch(err => console.log(err))
    }

    const values = {
        'name': user.name,
        'email': user.email,
        'img': file ? file.name : user.img,
        'password': password.value.length > 0 ? password.value : user.password,
    }

    const userUpdated = await userService.update(user._id, values);
    
    if (userUpdated) {
        alert("Cập nhật thành công!");
        router.push(`/profile/${userUpdated._id}`);
    }
}
</script>

<template>
    <div class="mt-20">
        <h1 class="text-green-700 dark:text-white font-bold text-center text-2xl mb-6">
            Cập nhật hồ sơ
        </h1>
        <div class="absolute top-32 left-[30%] z-50">
            <Delete v-if="showDeleted" @sendClosed="handleClosed" @sendDeleted="handleDeleted" />
        </div>
        <div class="md:flex justify-center gap-5">
            <div class="relative lg:mt-10 mb-6">
                <img v-if="uploaded" class="mx-auto mb-5 lg:w-72 w-64 rounded-lg" :src="uploaded" alt="book">
                <img v-if="!uploaded" class="mx-auto mb-5 lg:w-72 w-64 rounded-lg"
                    :src="`http://localhost:3000/${user.img}`" alt="book">
                <button @click="showDeletePopUp(true)"
                    class="relative float-right inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Xóa tài khoản
                    </span>
                </button>

            </div>
            <form @submit="handleSubmit" class="lg:w-1/3 w-full p-4  rounded-md dark:bg-gray-900">
                <div class="mb-5">
                    <label for="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Cập nhật ảnh đại diện
                    </label>
                    <input type="file" id="file" @change="handleChange" accept="image/*"
                        class=" text-sm rounded-lg dark:text-white" />
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Tài khoản
                    </label>
                    <input type="name" id="name" pattern=".{8,50}" v-model="user.name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    <p class="text-sm text-red-500 dark:text-red-600">{{ error.name }}</p>
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input type="email" id="email" v-model="user.email" @change="validation"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@gmail.com" />
                    <p class="text-sm text-red-500 dark:text-red-600">{{ error.email }}</p>
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mật khẩu
                    </label>
                    <input type="password" id="password" v-model="password" @change="validation"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    <p class="text-sm text-red-500 dark:text-red-600">{{ error.password }}</p>
                </div>
                <div class="mb-5">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nhập lại mật khẩu
                    </label>
                    <input type="password" id="repeat-password" v-model="comfirmPassword" @change="validation"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    <p class="text-sm text-red-500 dark:text-red-600">{{ error.repeatPassword }}</p>
                </div>

                <button type="submit"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Cập nhật
                </button>
            </form>
        </div>
    </div>
</template>
