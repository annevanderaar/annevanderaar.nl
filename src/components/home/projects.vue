<template>
  <div class="w-100 mt-12 mt-md-16">
    <h1 class="mb-6 text-h3 text-md-h2 font-weight-bold text-center">
      {{ $t('home.projects.title') }}
    </h1>

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="24"
      :loop="true"
      :navigation="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        960: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        },
        2100: {
          slidesPerView: 4,
        }
      }"
      class="project-swiper w-100"
    >
      <swiper-slide
        v-for="project in projects"
        :key="project.name"
        class="d-flex justify-center"
      >
        <v-card
          :to="{ name: project.routeName }"
          rounded="xl"
          class="project-card pa-6 pt-3 h-100 c-background d-flex flex-column text-start"
          max-width="480"
          width="100%"
        >
          <v-img
            :src="project.image"
            :alt="project.name"
            aspect-ratio="1.6"
            height="250"
          />

          <div class="mt-4 flex-grow-1">
            <p class="text-overline">
              {{ $t(project.type) }}
            </p>

            <h2 class="text-h5 text-md-h4 font-weight-bold text-uppercase">
              {{ project.name }}
            </h2>

            <p class="mt-4 text-body-1 text-medium-emphasis project-description">
              {{ $t(project.description) }}
            </p>
          </div>
        </v-card>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import anegyImage from '@/images/anegy/featured.png';
import jewelryImage from '@/images/jewelrybysil/featured.png';
import montiraImage from '@/images/montiramassage/featured.png';
import thaiWokImage from '@/images/thaiwoktogo/featured.png';
import sonsOfTheSeaImage from '@/images/sonsoftheseacustoms/featured.png';

const modules = [Autoplay, Navigation, Pagination];

const projects = [
  {
    name: 'Anegy',
    type: 'home.projects.anegy.type',
    description: 'home.projects.anegy.description',
    image: anegyImage,
    routeName: 'anegy',
  },
  {
    name: 'Jewelry by Sil',
    type: 'home.projects.jewelryBySil.type',
    description: 'home.projects.jewelryBySil.description',
    image: jewelryImage,
    routeName: 'jewelry-by-sil',
  },
  {
    name: 'Montira Massage',
    type: 'home.projects.montiraMassage.type',
    description: 'home.projects.montiraMassage.description',
    image: montiraImage,
    routeName: 'montira-massage',
  },
  {
    name: 'Thai Wok To Go',
    type: 'home.projects.thaiWokToGo.type',
    description: 'home.projects.thaiWokToGo.description',
    image: thaiWokImage,
    routeName: 'thai-wok-to-go',
  },
  {
    name: 'SOTS Customs',
    type: 'home.projects.sonsOfTheSeaCustoms.type',
    description: 'home.projects.sonsOfTheSeaCustoms.description',
    image: sonsOfTheSeaImage,
    routeName: 'sons-of-the-sea-customs',
  },
];
</script>

<style scoped>
.project-swiper {
  padding-inline: 48px;
  padding-bottom: 56px;
}

.project-swiper :deep(.swiper-wrapper) {
  align-items: stretch;
}

.project-swiper :deep(.swiper-slide) {
  height: auto;
  display: flex;
}

.project-swiper :deep(.swiper-button-prev),
.project-swiper :deep(.swiper-button-next) {
  color: rgb(var(--v-theme-secondary));
  width: 40px;
  height: 40px;
}

.project-swiper :deep(.swiper-button-prev::after),
.project-swiper :deep(.swiper-button-next::after) {
  font-size: 20px;
  font-weight: bold;
}

.project-swiper :deep(.swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.5);
}

.project-swiper :deep(.swiper-pagination-bullet-active) {
  background: rgb(var(--v-theme-secondary));
}

.project-swiper :deep(.swiper-pagination) {
  bottom: -5px !important;
}

.project-description {
  min-height: 75px;
}

.project-card {
  transition: transform .2s ease-in-out;
}

.project-card:hover {
  transform: translatey(-8px);
}
</style>
