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

        <v-tooltip :text="$t('navigation.changeLanguage')">
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
              id="menu-activator"
              class="cursor-pointer footer-link"
              icon="fas fa-globe"
            />
          </template>
        </v-tooltip>

        <v-menu activator="#menu-activator">
          <v-list>
            <v-list-item
              v-for="lang in ['nl', 'en']"
              :key="lang"
              :value="lang"
              :active="locale === lang"
            >
              <v-list-item-title @click="changeLanguage(lang)">
                {{ $t(`navigation.languages.${lang}`) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="d-flex justify-space-between align-center">
        <div>
          <router-link :to="{ name: 'home' }">
            <h1>Anne van der Aar</h1>
          </router-link>

          <p>{{ $t('navigation.forWebsite') }}</p>
        </div>

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
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

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

function changeLanguage(language) {
  locale.value = language;
}
</script>
