<template>
  <ProjectShow
    :title="$t('projects.montiraMassage.title')"
    :type="$t('projects.montiraMassage.type')"
    :description="$t('projects.montiraMassage.description')"
    :featured-image="featuredImage"
    website-url="https://montiramassage.nl"
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

const highlights = [
  {
    title: 'projects.montiraMassage.highlights.wordpress.title',
    text: 'projects.montiraMassage.highlights.wordpress.text',
    icon: 'fab fa-wordpress',
  },
  {
    title: 'projects.montiraMassage.highlights.booking.title',
    text: 'projects.montiraMassage.highlights.booking.text',
    icon: 'fas fa-calendar-check',
  },
  {
    title: 'projects.montiraMassage.highlights.design.title',
    text: 'projects.montiraMassage.highlights.design.text',
    icon: 'fas fa-paint-brush',
  },
];

const images = [massages, spa, booking, contact];
</script>
