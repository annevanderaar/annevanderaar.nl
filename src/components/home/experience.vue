<template>
  <div class="mt-12 mt-md-16 d-flex w-100 align-center flex-column">
    <h1 class="my-6 text-h3 text-md-h2 font-weight-bold text-center">
      {{ $t('home.experience.title') }}
    </h1>

    <div class="w-md-50">
      <v-timeline
        side="end"
        align="start"
      >
        <v-timeline-item
          v-for="experience in experiences"
          :key="experience.company"
          dot-color="secondary"
          size="small"
        >
          <template #icon>
            <v-icon icon="fas fa-briefcase" size="13"/>
          </template>

          <template #opposite>
            <span class="font-weight-bold text-secondary">
              {{ experience.period }}
            </span>
          </template>

          <div class="pb-6 text-start">
            <p class="text-overline">
              {{ experience.company }}
            </p>

            <h3 class="font-weight-bold">
              {{ experience.role }}
            </h3>

            <p class="mb-0 mt-2">
              {{ experience.description }}
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from "vue";

const { t } = useI18n();

const experiences = computed(() => [
  {
    role: t('home.experience.byYourSite.role'),
    company: 'ByYourSite & CandidateCompass',
    period: `2024 — ${t('general.present')}`,
    description: t('home.experience.byYourSite.description'),
  },
  {
    role: t('home.experience.fotoCadeau.role'),
    company: 'FotoCadeau.nl',
    period: '2023 — 2024',
    description: t('home.experience.fotoCadeau.description'),
  },
  {
    role: t('home.experience.hdm.role'),
    company: 'HDM Pipelines',
    period: '2022 — 2023',
    description: t('home.experience.hdm.description'),
  },
  {
    role: t('home.experience.snelwebcenter.role'),
    company: 'Snelwebcenter',
    period: '2022',
    description: t('home.experience.snelwebcenter.description'),
  },
  {
    role: t('home.experience.sterc.role'),
    company: 'Sterc Online Agency',
    period: '2021 — 2022',
    description: t('home.experience.sterc.description'),
  },
]);
</script>
