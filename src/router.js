import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Logout from './components/Logout.vue'
import CheckOut from './components/CheckOut.vue'
import ErrorPage from './components/ErrorPage.vue';
const routes = [
    {
        path: '/',
        component: Home,
        meta: { requiresAuth: true } 
    },
    
    {
        path: '/checkout',
        component: CheckOut,
        meta: { requiresAuth: true } 
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/product/:id',
        // component: Product
    },
    {
        path: '/logout',
        component: Logout,
        meta: { requiresAuth: true }
    },
    {
        path: '/:catchAll(.*)',
        component: ErrorPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
