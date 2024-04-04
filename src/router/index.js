import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BooksService from '@/services/book.service';
// import userService from '@/services/user.service';
import BorrowedBookService from '@/services/borrowedBook.service';
var books = await BooksService.getAll();
// var users = await userService.getAll();
var borrowedBook = await BorrowedBookService.getAll();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        books: books,
      }
      
    },
    {
      path: '/book/:id',
      name: 'book.detail',
      component: () => import('../views/BookDetail.vue'),
      meta: {
        books: books,
      },
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Categories.vue'),
      meta: {
        books: books,
      }
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/editprofile/:id',
      name: 'editprofile',
      component: () => import('../views/EditProfile.vue')
    },
    {
      path: '/borrowedbook',
      name: 'borrowedbook',
      component: () => import('../views/BorrowedBook.vue'),
      meta: {
        bbooks: borrowedBook,
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@/views/NotFound.vue")
    },
  ]
})

export default router
