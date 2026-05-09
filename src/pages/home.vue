<template>
  <div class="w-100 ga-12 ga-md-16 pa-4 d-flex flex-column justify-center align-center">
    <Hero/>

    <Projects/>

    <Experience/>
  </div>
</template>

<script setup>
import Hero from "@/components/home/hero.vue";
import Projects from "@/components/home/projects.vue";
import Experience from "@/components/home/experience.vue";
</script>
