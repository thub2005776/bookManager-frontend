import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BooksService from '@/services/book.service';
import UserService from '@/services/user.service';
import BorrowedBookService from '@/services/borrowedBook.service';
import loginService from '@/services/login.service';
import favoriteService from '@/services/favorite.service';

const email = await loginService.get();
const auth = await UserService.getOne(email.email);
const books = await BooksService.getAll();
const borrowedBook = await BorrowedBookService.getManyByUid(auth && auth._id);
const favorite = await favoriteService.getManyByUid(auth && auth._id);


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
        user: auth,
        favorite: favorite,
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
      component: () => import('../views/Profile.vue'),
      meta: {
        user: auth,
        bbooks: borrowedBook,
        favorite: favorite,
      }
    },
    {
      path: '/editprofile/:id',
      name: 'editprofile',
      component: () => import('../views/EditProfile.vue'),
      meta: {
        user: auth,
      }
    },
    {
      path: '/borrowedbook',
      name: 'borrowedbook',
      component: () => import('../views/BorrowedBook.vue'),
      meta: {
        user: auth,
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
