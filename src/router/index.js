import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/Home.vue'
import Productos from '../views/Productos.vue'

const routes = [
  { path: '/', name: 'Home', component: AppHome },
  { path: '/productos', name: 'Productos', component: Productos }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes // usar arreglo routes 
})

export default router
