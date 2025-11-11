<template>
  <v-app>
    <Navigation />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import Footer from "@/components/footer.vue";
import Navigation from "@/components/navigation.vue";
</script>
