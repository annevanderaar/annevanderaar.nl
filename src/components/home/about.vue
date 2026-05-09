<template>
  <div class="pb-6 pb-md-16 mt-12 mt-md-16 w-100">
    <h1 class="text-h3 text-md-h2 font-weight-bold text-center mb-10">
      {{ $t('home.about.title') }}
    </h1>

    <v-row>
      <v-col cols="12" md="4">
        <v-sheet rounded="xl" class="pa-6 h-100 c-background">
          <div class="d-flex align-center ga-3 mb-4">
            <v-icon icon="fas fa-user" color="secondary" size="24" />

            <h3 class="text-h5 font-weight-bold">
              {{ $t('home.about.properties.title') }}
            </h3>
          </div>

          <div class="d-flex flex-column ga-3">
            <div
              v-for="property in properties"
              :key="property"
              class="d-flex align-center ga-3"
            >
              <v-icon icon="fas fa-check" size="14" color="secondary" />
              <span>{{ $t(property) }}</span>
            </div>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet rounded="xl" class="pa-6 h-100 c-background">
          <div class="d-flex align-center ga-3 mb-4">
            <v-icon icon="fas fa-language" color="secondary" size="24" />

            <h3 class="text-h5 font-weight-bold">
              {{ $t('home.about.languages.title') }}
            </h3>
          </div>

          <div class="d-flex flex-column ga-4">
            <div
              v-for="language in languages"
              :key="language.name"
            >
              <div class="d-flex justify-space-between mb-1">
                <span>{{ $t(language.name) }}</span>
                <span class="text-secondary">{{ $t(language.level) }}</span>
              </div>

              <v-progress-linear
                :model-value="language.value"
                color="secondary"
                rounded
              />
            </div>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet rounded="xl" class="pa-6 h-100 c-background">
          <div class="d-flex align-center ga-3 mb-4">
            <v-icon icon="fas fa-heart" color="secondary" size="24" />

            <h3 class="text-h5 font-weight-bold">
              {{ $t('home.about.hobbies.title') }}
            </h3>
          </div>

          <div class="d-flex flex-column ga-3">
            <div
              v-for="hobby in hobbies"
              :key="hobby.name"
              class="d-flex align-center ga-3"
            >
              <v-icon
                :icon="hobby.icon"
                size="16"
                color="secondary"
              />

              <span>{{ $t(hobby.name) }}</span>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const properties = [
  'home.about.properties.customerFriendly',
  'home.about.properties.social',
  'home.about.properties.reliable',
  'home.about.properties.punctual',
  'home.about.properties.eagerToLearn',
];

const languages = [
  {
    name: 'home.about.languages.dutch',
    level: 'home.about.languages.native',
    value: 100,
  },
  {
    name: 'home.about.languages.english',
    level: 'home.about.languages.excellent',
    value: 90,
  },
  {
    name: 'home.about.languages.german',
    level: 'home.about.languages.basic',
    value: 35,
  },
  {
    name: 'home.about.languages.frisian',
    level: 'home.about.languages.basic',
    value: 30,
  },
];

const hobbies = [
  {
    name: 'home.about.hobbies.tennis',
    icon: 'fas fa-table-tennis-paddle-ball',
  },
  {
    name: 'home.about.hobbies.bouldering',
    icon: 'fas fa-mountain',
  },
  {
    name: 'home.about.hobbies.fitness',
    icon: 'fas fa-dumbbell',
  },
  {
    name: 'home.about.hobbies.motorcycling',
    icon: 'fas fa-motorcycle',
  },
  {
    name: 'home.about.hobbies.programming',
    icon: 'fas fa-code',
  },
];
</script>
