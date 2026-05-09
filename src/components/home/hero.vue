<template>
  <v-row class="w-100 pt-6 pt-md-16 align-center">
    <v-col
      cols="12"
      md="7"
    >
      <p class="text-overline text-secondary mb-2">
        Vue / TypeScript / Frontend Development
      </p>

      <h1 class="text-h3 text-md-h2 font-weight-bold">
        {{ $t('home.title') }}
      </h1>

      <p class="text-body-1 text-md-h6 mt-4">
        {{ $t('home.subtitle') }}
      </p>

      <div class="d-flex ga-2 mt-6 flex-wrap">
        <v-chip variant="outlined" color="secondary" v-for="skill in skills">
          {{ skill }}
        </v-chip>
      </div>
    </v-col>

    <v-col
      cols="12"
      md="5"
    >
      <v-card
        rounded="xl"
        class="pa-8 c-background"
      >
        <div class="d-flex align-center justify-space-between mb-8">
          <div>
            <p class="text-overline text-secondary mb-1">
              Frontend Developer
            </p>

            <h2 class="text-h4 font-weight-bold">
              {{ $t('home.stats.title') }}
            </h2>
          </div>

          <v-icon
            icon="fas fa-code"
            size="40"
            color="secondary"
          />
        </div>

        <div class="d-flex flex-column ga-5 ps-4">
          <div
            v-for="i in 4"
            :key="i"
            class="d-flex align-center ga-4"
          >
            <v-icon
              icon="far fa-check-circle"
              color="secondary"
            />

            <div>
              <p class="font-weight-medium text-body-1">
                {{ $t(`home.stats.${i}`) }}
              </p>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const skills = ['Vue', 'TypeScript', 'Javascript', 'React', 'Laravel', 'PHP', 'WordPress'];
</script>
