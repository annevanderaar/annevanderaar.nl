<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4">
    <div class="d-flex ga-3">
      <v-icon
        class="cursor-pointer footer-link"
        v-for="link in links"
        :key="link.icon"
        :icon="link.icon"
        color="white"
        @click="openLink(link.link)"
      />
    </div>

    <v-divider class="my-2" thickness="2" width="50"/>

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
  },
  {
    icon: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/anne-van-der-aar/',
  },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/annevanderaar',
  },
];

function openLink(link) {
  window.open(link, '_blank');
}
</script>
