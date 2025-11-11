import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/anegy', name: 'anegy', component: Home },
  { path: '/jewelry-by-sil', name: 'jewelry-by-sil', component: Home },
  { path: '/montira-massage', name: 'montira-massage', component: Home },
  { path: '/thai-wok-to-go', name: 'thai-wok-to-go', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
