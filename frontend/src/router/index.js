import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersLayout from '../views/users/UsersLayout.vue'
import SuppliersView from '../views/users/SuppliersView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'user',
      component: UsersLayout,
      children:[
        {
          path: 'new-user',
          component: () => import('../views/users/NewUserLayout.vue'),
          children: [
            {
              path: 'users',
              name: 'user-details',
              component: () => import('../views/users/UsersView.vue'),
            },
            {
              path: 'main_contact',
              name: 'contact-details',
              component: () => import('../views/users/MainContactView.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/suppliers',
      name: 'supplier',
      component: SuppliersView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/AuthLayout.vue'),
      children:[
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue')
        },
        {
          path: 'confirm-account/:token',
          name: 'confirm-account',
          component: () => import('../views/auth/ConfirmAccountView.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')
        }
      ]
    }
  ]
})

export default router
