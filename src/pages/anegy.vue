<template>
  <ProjectShow
    :title="$t('projects.anegy.title')"
    :type="$t('projects.anegy.type')"
    :description="$t('projects.anegy.description')"
    :featured-image="featuredImage"
    website-url="https://anegy.nl"
    github-url="https://github.com/annevanderaar/Anegy-V2"
    :technologies="['Vue', 'TypeScript', 'Laravel', 'PHP', 'TMDB API']"
    :about="$t('projects.anegy.about')"
    :highlights="highlights"
    :images="images"
  />
</template>

<script setup>
import ProjectShow from '@/components/project-show.vue';
import featuredImage from '@/images/anegy/featured.png';
import generator from '@/images/anegy/movie-generator.png';
import discover from '@/images/anegy/movies-dicover.jpg';
import homepage from '@/images/anegy/home-page.jpg';
import favorites from '@/images/anegy/favorites.png';
import watched from '@/images/anegy/watched.png';
import detail from '@/images/anegy/detail.png';
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const highlights = computed(() => [
  {
    title: 'TMDB API',
    text: t('projects.anegy.highlights.tmdb'),
    icon: 'fas fa-database',
  },
  {
    title: t('projects.anegy.highlights.account.title'),
    text: t('projects.anegy.highlights.account.text'),
    icon: 'fas fa-user',
  },
  {
    title: t('projects.anegy.highlights.generator.title'),
    text: t('projects.anegy.highlights.generator.text'),
    icon: 'fas fa-shuffle',
  },
]);

const images = [homepage, discover, generator, favorites, watched, detail];
</script>
