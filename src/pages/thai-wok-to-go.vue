<template>
  <ProjectShow
    :title="$t('projects.thaiWokToGo.title')"
    :type="$t('projects.thaiWokToGo.type')"
    :description="$t('projects.thaiWokToGo.description')"
    :featured-image="featuredImage"
    website-url="https://thaiwoktogo.nl"
    :technologies="['WordPress', 'HTML', 'CSS']"
    :about="$t('projects.thaiWokToGo.about')"
    :highlights="highlights"
    :images="images"
    reverse
  />
</template>

<script setup>
import ProjectShow from '@/components/project-show.vue';
import featuredImage from '@/images/thaiwoktogo/featured.png';
import catering from '@/images/thaiwoktogo/catering.png';
import footer from '@/images/thaiwoktogo/footer.png';
import menu from '@/images/thaiwoktogo/menu.png';
import menu2 from '@/images/thaiwoktogo/menu-2.png';
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const highlights = computed(() => [
  {
    title: t('projects.thaiWokToGo.highlights.wordpress.title'),
    text: t('projects.thaiWokToGo.highlights.wordpress.text'),
    icon: 'fab fa-wordpress',
  },
  {
    title: t('projects.thaiWokToGo.highlights.menu.title'),
    text: t('projects.thaiWokToGo.highlights.menu.text'),
    icon: 'fas fa-utensils',
  },
  {
    title: t('projects.thaiWokToGo.highlights.maps.title'),
    text: t('projects.thaiWokToGo.highlights.maps.text'),
    icon: 'fas fa-map-location-dot',
  },
]);

const images = [footer, catering, menu, menu2];
</script>
