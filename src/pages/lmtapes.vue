<template>
  <ProjectShow
    :title="$t('projects.lmtapes.title')"
    :type="$t('projects.lmtapes.type')"
    :description="$t('projects.lmtapes.description')"
    :featured-image="featuredImage"
    website-url="https://lmtapes.nl/"
    :technologies="['React', 'Tailwind', 'CSS']"
    :about="$t('projects.lmtapes.about')"
    :highlights="highlights"
    :images="images"
    reverse
  />
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectShow from '@/components/project-show.vue';

import featuredImage from '@/images/lmtapes/featured.png';
import work from '@/images/lmtapes/work.png';
import otherWork from '@/images/lmtapes/other-work.png';
import about from '@/images/lmtapes/about.png';
import about2 from '@/images/lmtapes/about-2.png';

const { t } = useI18n();

const highlights = computed(() => [
  {
    title: t('projects.lmtapes.highlights.portfolio.title'),
    text: t('projects.lmtapes.highlights.portfolio.text'),
    icon: 'fas fa-images',
  },
  {
    title: t('projects.lmtapes.highlights.design.title'),
    text: t('projects.lmtapes.highlights.design.text'),
    icon: 'fas fa-palette',
  },
  {
    title: t('projects.lmtapes.highlights.multilingual.title'),
    text: t('projects.lmtapes.highlights.multilingual.text'),
    icon: 'fas fa-language',
  },
]);

const images = [work, otherWork, otherWork, about2];
</script>
