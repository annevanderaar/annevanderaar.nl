<template>
  <div class="w-100 pa-4">
    <v-row class="py-8 py-md-16 align-center">
      <v-col cols="12" md="7">
        <p class="text-overline text-secondary mb-2">
          {{ $t('byYourSite.hero.type') }}
        </p>

        <h1 class="text-h3 text-md-h2 font-weight-bold text-break">
          ByYourSite & CandidateCompass
        </h1>

        <p class="text-body-1 text-md-h6 mt-4 text-medium-emphasis">
          {{ $t('byYourSite.hero.description') }}
        </p>
      </v-col>

      <v-col cols="12" md="5">
        <v-sheet rounded="xl" class="pa-6 c-background">
          <p class="text-overline text-secondary mb-1">
            {{ $t('byYourSite.role.label') }}
          </p>

          <h2 class="text-h4 font-weight-bold mb-4">
            {{ $t('byYourSite.role.title') }}
          </h2>

          <div class="d-flex flex-column ga-3">
            <div class="d-flex align-center ga-3">
              <v-icon icon="fas fa-calendar" color="secondary" />

              <span>
                03-2024 — {{ $t('general.present') }}
              </span>
            </div>

            <div class="d-flex align-center ga-3">
              <v-icon icon="fas fa-location-dot" color="secondary" />

              <span>
                Groningen
              </span>
            </div>

            <div class="d-flex align-center ga-3">
              <v-icon icon="fas fa-code" color="secondary" />

              <span>
                Vue, TypeScript, Laravel, WordPress, CSS, Bootstrap, Vuetify
              </span>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="py-8">
      <v-col cols="12" md="4">
        <h2 class="text-h4 font-weight-bold">
          {{ $t('byYourSite.myRole.title') }}
        </h2>
      </v-col>

      <v-col cols="12" md="8">
        <p class="text-body-1 text-medium-emphasis">
          {{ $t('byYourSite.myRole.description') }}
        </p>
      </v-col>
    </v-row>

    <div class="py-8">
      <h2 class="text-h4 font-weight-bold mb-6 text-center">
        {{ $t('byYourSite.projects.title') }}
      </h2>

      <v-row>
        <v-col
          v-for="item in workItems"
          :key="item.title"
          cols="12"
          md="4"
        >
          <v-sheet rounded="xl" class="pa-6 h-100 c-background">
            <v-icon
              :icon="item.icon"
              color="secondary"
              size="28"
              class="mb-4"
            />

            <h3 class="font-weight-bold mb-2">
              {{ item.title }}
            </h3>

            <p class="text-medium-emphasis mb-0">
              {{ item.text }}
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    </div>

    <div class="py-8">
      <h2 class="text-h4 font-weight-bold mb-6 text-center">
        {{ $t('byYourSite.websites.title') }}
      </h2>

      <div class="d-flex flex-wrap ga-3 justify-center">
        <v-chip
          v-for="website in websites"
          :key="website.name"
          :href="website.link || undefined"
          :target="website.link ? '_blank' : undefined"
          :rel="website.link ? 'noopener noreferrer' : undefined"
          color="secondary"
          variant="outlined"
        >
          {{ website.name }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const workItems = computed(() => [
  {
    title: t('byYourSite.projects.candidateCompass.title'),
    text: t('byYourSite.projects.candidateCompass.text'),
    icon: 'fas fa-briefcase',
  },
  {
    title: t('byYourSite.projects.marketing.title'),
    text: t('byYourSite.projects.marketing.text'),
    icon: 'fas fa-desktop',
  },
  {
    title: t('byYourSite.projects.recruitment.title'),
    text: t('byYourSite.projects.recruitment.text'),
    icon: 'fas fa-layer-group',
  },
  {
    title: t('byYourSite.projects.whiteLabel.title'),
    text: t('byYourSite.projects.whiteLabel.text'),
    icon: 'fas fa-globe',
  },
  {
    title: t('byYourSite.projects.wordpress.title'),
    text: t('byYourSite.projects.wordpress.text'),
    icon: 'fab fa-wordpress',
  },
  {
    title: t('byYourSite.projects.backend.title'),
    text: t('byYourSite.projects.backend.text'),
    icon: 'fas fa-code',
  },
]);

const websites = [
  {
    name: 'Codecareer',
    link: 'https://codecareer.nl',
  },
  {
    name: 'Vito',
    link: 'https://vito.nl',
  },
  {
    name: 'InterStep',
    link: 'https://interstep.nl',
  },
  {
    name: 'Tecson',
    link: 'https://tecson.nl',
  },
  {
    name: 'VIGR',
    link: 'https://vigr.nl',
  },
  {
    name: 'MBG',
    link: null,
  },
  {
    name: 'Jeugdbescherming Noord',
    link: null,
  },
  {
    name: 'Veilig Thuis Groningen',
    link: null,
  },
  {
    name: 'CandidateCompass',
    link: 'https://candidatecompass.com',
  },
];
</script>
