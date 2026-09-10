<template>
  <ProjectShow
    :title="$t('projects.spekulaasplanken.title')"
    :type="$t('projects.spekulaasplanken.type')"
    :description="$t('projects.spekulaasplanken.description')"
    :featured-image="featuredImage"
    website-url="https://spekulaasplanken.nl"
    :technologies="['React', 'Tailwind', 'React Router', 'i18n', 'Design']"
    :about="$t('projects.spekulaasplanken.about')"
    :highlights="highlights"
    :images="images"
  />
</template>

<script setup>
import ProjectShow from '../components/project-show.vue';
import featuredImage from '../images/spekulaasplanken/featured.png';
import contact from '../images/spekulaasplanken/contact.png';
import home from '../images/spekulaasplanken/home.png';
import products from '../images/spekulaasplanken/products.png';
import recept from '../images/spekulaasplanken/recept.png';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const highlights = computed(() => [
  {
    title: t('projects.spekulaasplanken.highlights.catalogue.title'),
    text: t('projects.spekulaasplanken.highlights.catalogue.text'),
    icon: 'fas fa-layer-group',
  },
  {
    title: t('projects.spekulaasplanken.highlights.design.title'),
    text: t('projects.spekulaasplanken.highlights.design.text'),
    icon: 'fas fa-palette',
  },
  {
    title: t('projects.spekulaasplanken.highlights.languages.title'),
    text: t('projects.spekulaasplanken.highlights.languages.text'),
    icon: 'fas fa-language',
  },
]);

const images = [home, products, recept, contact];
</script>
