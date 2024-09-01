import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AppHome from './pages/AppHome.vue'
import AppFavorites from './pages/AppFavorites.vue'
import AppNotFound from './pages/AppNotFound.vue'

const app = createApp(App)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: AppFavorites
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: AppNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

app.mount('#app')
