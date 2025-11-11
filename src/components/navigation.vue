<template>
  <v-app-bar :elevation="1" height="120">
    <v-container>
      <div class="d-flex ga-3 justify-end w-100 pt-2">
        <v-icon
          class="cursor-pointer footer-link"
          v-for="link in links"
          :key="link.icon"
          :icon="link.icon"
          color="white"
          @click="openLink(link.link)"
        />
      </div>

      <div class="d-flex justify-space-between align-center">
        <router-link :to="{ name: 'home' }">
          <h1>Anne van der Aar</h1>
          <p>Voor al uw websites</p>
        </router-link>

        <div class="d-flex ga-3">
          <router-link
            v-for="page in pages"
            :key="page.name"
            :to="{ name: page.route }"
          >
            {{ page.name }}
          </router-link>
        </div>
      </div>
    </v-container>
  </v-app-bar>
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

const pages = [
  {
    name: 'Anegy',
    route: 'anegy',
  },
  {
    name: 'Jewelry by Sil',
    route: 'jewelry-by-sil',
  },
  {
    name: 'Montira massage',
    route: 'montira-massage',
  },
  {
    name: 'Thai wok to go',
    route: 'thai-wok-to-go',
  },
];

function openLink(link) {
  window.open(link, '_blank');
}
</script>
