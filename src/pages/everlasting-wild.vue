<template>
  <ProjectShow
    :title="$t('projects.everlastingWild.title')"
    :type="$t('projects.everlastingWild.type')"
    :description="$t('projects.everlastingWild.description')"
    :featured-image="featuredImage"
    website-url="https://everlastingwild.nl"
    :technologies="['React', 'Tailwind', 'React Router', 'i18n', 'Modern']"
    :about="$t('projects.everlastingWild.about')"
    :highlights="highlights"
    :images="images"
    reverse
  />
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectShow from '../components/project-show.vue';
import featuredImage from '../images/everlasting-wild/featured.png';
import projects from '../images/everlasting-wild/projects.png';
import why from '../images/everlasting-wild/why.png';

const { t } = useI18n();

const highlights = computed(() => [
  {
    title: t('projects.everlastingWild.highlights.design.title'),
    text: t('projects.everlastingWild.highlights.design.text'),
    icon: 'fas fa-wand-magic-sparkles',
  },
  {
    title: t('projects.everlastingWild.highlights.projects.title'),
    text: t('projects.everlastingWild.highlights.projects.text'),
    icon: 'fas fa-layer-group',
  },
  {
    title: t('projects.everlastingWild.highlights.languages.title'),
    text: t('projects.everlastingWild.highlights.languages.text'),
    icon: 'fas fa-language',
  },
]);

const images = [projects, why];
</script>
