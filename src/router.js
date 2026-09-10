import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import Anegy from "@/pages/anegy.vue";
import JewelryBySil from "@/pages/jewelry-by-sil.vue";
import MontiraMassage from "@/pages/montira-massage.vue";
import ThaiWokToGo from "@/pages/thai-wok-to-go.vue";
import SonsOfTheSeaCustoms from "@/pages/sons-of-the-sea-customs.vue";
import Spekulaasplanken from "@/pages/spekulaasplanken.vue";
import EverlastingWild from "@/pages/everlasting-wild.vue";
import ByYourSite from "@/pages/by-your-site.vue";

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/anegy', name: 'anegy', component: Anegy },
  { path: '/jewelry-by-sil', name: 'jewelry-by-sil', component: JewelryBySil },
  { path: '/montira-massage', name: 'montira-massage', component: MontiraMassage },
  { path: '/thai-wok-to-go', name: 'thai-wok-to-go', component: ThaiWokToGo },
  { path: '/sons-of-the-sea-customs', name: 'sons-of-the-sea-customs', component: SonsOfTheSeaCustoms },
  { path: '/spekulaasplanken', name: 'spekulaasplanken', component: Spekulaasplanken },
  { path: '/everlasting-wild', name: 'everlasting-wild', component: EverlastingWild },
  { path: '/by-your-site', name: 'by-your-site', component: ByYourSite },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
})

export default router
