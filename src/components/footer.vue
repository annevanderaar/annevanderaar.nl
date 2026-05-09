<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4">
    <div class="d-flex ga-3">
      <v-icon
        class="cursor-pointer c-link"
        v-for="link in socialLinks"
        :key="link.icon"
        :icon="link.icon"
        color="white"
        @click="openLink(link.link)"
      />
    </div>

    <v-divider class="my-2" thickness="2" width="50"/>

    <div>
      Copyright © {{ new Date().getFullYear() }} —
      <router-link :to="{ name: 'home' }">
        <strong>Anne van der Aar</strong>
      </router-link>
    </div>
  </v-footer>
</template>

<script setup>
import {openLink, socialLinks} from "@/utilities/links.util";
</script>
