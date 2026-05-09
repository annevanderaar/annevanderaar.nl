<template>
  <div class="w-100 pa-4">
    <v-row
      class="py-8 py-md-8 align-center"
      :class="{ 'flex-row-reverse': reverse }"
    >
      <v-col cols="12" md="6">
        <p class="text-overline text-secondary mb-2">
          {{ $t(type) }}
        </p>

        <h1 class="text-h3 text-md-h2 font-weight-bold">
          {{ title }}
        </h1>

        <p class="text-body-1 text-md-h6 mt-4 text-medium-emphasis">
          {{ description }}
        </p>

        <div class="d-flex justify-space-between align-center mt-6 flex-wrap ga-4">
          <div class="d-flex ga-2 flex-wrap">
            <v-chip
              v-for="tech in technologies"
              :key="tech"
              color="secondary"
              variant="outlined"
            >
              {{ tech }}
            </v-chip>
          </div>

          <v-btn
            v-if="githubUrl"
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="secondary"
            rounded="lg"
          >
            GitHub

            <v-icon
              icon="fab fa-github"
              size="small"
              class="ml-2"
            />
          </v-btn>

          <v-btn
            v-if="websiteUrl"
            :href="websiteUrl"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
            rounded="lg"
          >
            {{ $t('project.show.visitWebsite') }}

            <v-icon
              icon="fas fa-arrow-up-right-from-square"
              size="small"
              class="ml-2"
            />
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          :src="featuredImage"
          :alt="title"
          rounded="xl"
        />
      </v-col>
    </v-row>

    <v-row class="py-8">
      <v-col cols="12" md="4">
        <h2 class="text-h4 font-weight-bold mb-4">
          {{ $t('project.show.aboutProject') }}
        </h2>
      </v-col>

      <v-col cols="12" md="8">
        <p class="text-body-1 text-medium-emphasis">
          {{ about }}
        </p>
      </v-col>
    </v-row>

    <v-row class="py-8">
      <v-col
        v-for="item in highlights"
        :key="item.title"
        cols="12"
        md="4"
      >
        <v-card
          rounded="xl"
          class="pa-6 h-100 c-background"
        >
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
        </v-card>
      </v-col>
    </v-row>

    <div
      v-if="images.length"
      class="py-8"
    >
      <h2 class="text-h4 font-weight-bold mb-6 text-center">
        {{ $t('project.show.screenshots') }}
      </h2>

      <v-row>
        <v-col
          v-for="image in images"
          :key="image"
          cols="12"
          md="6"
        >
          <v-img
            :src="image"
            rounded="xl"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
    required: false,
    default: '',
  },
  reverse: {
    type: Boolean,
    required: false,
    default: false,
  },
  githubUrl: {
    type: String,
    required: false,
    default: '',
  },
  technologies: {
    type: Array,
    required: false,
    default: () => [],
  },
  highlights: {
    type: Array,
    required: false,
    default: () => [],
  },
  images: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>
