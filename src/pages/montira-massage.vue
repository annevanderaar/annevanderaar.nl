<template>
  <ProjectShow
    :title="$t('projects.montiraMassage.title')"
    :type="$t('projects.montiraMassage.type')"
    :description="$t('projects.montiraMassage.description')"
    :featured-image="featuredImage"
    :technologies="['WordPress', 'Elementor', 'Bookly', 'PHP', 'CSS']"
    :about="$t('projects.montiraMassage.about')"
    :highlights="highlights"
    :images="images"
  />
</template>

<script setup>
import ProjectShow from '@/components/project-show.vue';
import featuredImage from '@/images/montiramassage/featured.png';
import spa from '@/images/montiramassage/spa.png';
import massages from '@/images/montiramassage/massages.png';
import booking from '@/images/montiramassage/booking.png';
import contact from '@/images/montiramassage/contact.png';
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const highlights = computed(() => [
  {
    title: t('projects.montiraMassage.highlights.wordpress.title'),
    text: t('projects.montiraMassage.highlights.wordpress.text'),
    icon: 'fab fa-wordpress',
  },
  {
    title: t('projects.montiraMassage.highlights.booking.title'),
    text: t('projects.montiraMassage.highlights.booking.text'),
    icon: 'fas fa-calendar-check',
  },
  {
    title: t('projects.montiraMassage.highlights.design.title'),
    text: t('projects.montiraMassage.highlights.design.text'),
    icon: 'fas fa-paint-brush',
  },
]);

const images = [massages, spa, booking, contact];
</script>
