import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersLayout from '../views/users/UsersLayout.vue'
import Login from '../views/Login.vue'
import SuppliersView from '../views/users/SuppliersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      component: Login
    },
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
          path: 'new',
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
    }
  ]
})

export default router
