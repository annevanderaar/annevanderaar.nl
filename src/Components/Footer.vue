<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4">
    <div class="d-flex ga-3">
      <v-icon
        class="cursor-pointer footer-link"
        v-for="link in links"
        :key="link.icon"
        :icon="link.icon"
        :color="link.color"
        size="large"
      ></v-icon>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div>
      Copyright © {{ new Date().getFullYear() }} —
      <a href="https://annevanderaar.nl">
        <strong>Anne van der Aar</strong>
      </a>
    </div>
  </v-footer>
</template>

<script setup>
const links = [
  {
    icon: 'fab fa-telegram',
    link: 'https://t.me/annevanderaar',
    color: '#33A7DD',
  },
  {
    icon: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/anne-van-der-aar/',
    color: '#00669A',
  },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/annevanderaar',
    color: 'white',
  },
]
</script>
