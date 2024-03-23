import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/book/:id',
      name: 'book.detail',
      component: () => import('../views/BookDetail.vue')
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
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/newbook',
      name: 'newbook',
      component: () => import('../views/NewBook.vue')
    },
    {
      path: '/author',
      name: 'author',
      component: () => import('../views/Author.vue')
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
      component: () => import('../views/BorrowedBook.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@/views/NotFound.vue")
    },
  ]
})

export default router
