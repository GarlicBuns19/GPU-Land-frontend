import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/products/:id',
    name: 'singleProduct',
    component: () => import('../views/SingleProductView.vue'),
    props: true
  },
  {
    path: '/admin/products',
    name: 'adminProducts',
    component: () => import('../views/AdminProducts.vue'),
    props: true
  },
  {
    path: '/admin/users',
    name: 'adminUsers',
    component: () => import('../views/AdminUsers.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: () => import('../views/SingleUserView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
