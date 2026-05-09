<template>
  <div class="w-100 pa-4">
    <v-row class="py-8 py-md-16 align-center">
      <v-col cols="12" md="7">
        <p class="text-overline text-secondary mb-2">
          {{ $t('byYourSite.hero.type') }}
        </p>

        <h1 class="text-h3 text-md-h2 font-weight-bold">
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
              {{ $t(item.title) }}
            </h3>

            <p class="text-medium-emphasis mb-0">
              {{ $t(item.text) }}
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
          :key="website"
          color="secondary"
          variant="outlined"
        >
          {{ website }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script setup>
const workItems = [
  {
    title: 'byYourSite.projects.candidateCompass.title',
    text: 'byYourSite.projects.candidateCompass.text',
    icon: 'fas fa-briefcase',
  },
  {
    title: 'byYourSite.projects.marketing.title',
    text: 'byYourSite.projects.marketing.text',
    icon: 'fas fa-desktop',
  },
  {
    title: 'byYourSite.projects.recruitment.title',
    text: 'byYourSite.projects.recruitment.text',
    icon: 'fas fa-layer-group',
  },
  {
    title: 'byYourSite.projects.whiteLabel.title',
    text: 'byYourSite.projects.whiteLabel.text',
    icon: 'fas fa-globe',
  },
  {
    title: 'byYourSite.projects.wordpress.title',
    text: 'byYourSite.projects.wordpress.text',
    icon: 'fab fa-wordpress',
  },
  {
    title: 'byYourSite.projects.backend.title',
    text: 'byYourSite.projects.backend.text',
    icon: 'fas fa-code',
  },
];

const websites = [
  'Codecareer',
  'Vito',
  'Interstep',
  'Tecson',
  'Vigr',
  'MBG',
  'Jeugdbescherming Noord',
  'Veilig Thuis Groningen',
  'CandidateCompass',
];
</script>
