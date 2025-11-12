<template>
  <v-app-bar :elevation="1" height="120">
    <v-container>
      <div class="d-flex ga-3 justify-end w-100 pt-2">
        <v-icon
          v-for="link in links"
          :key="link.icon"
          :icon="link.icon"
          color="white"
          class="cursor-pointer c-link"
          @click="openLink(link.link)"
        />

        <v-menu>
          <template #activator="{ props }">
            <v-tooltip :text="$t('navigation.changeLanguage')">
              <template #activator="{ props: tooltip }">
                <v-icon
                  v-bind="{ ...props, ...tooltip }"
                  icon="fas fa-globe"
                  class="cursor-pointer c-link"
                />
              </template>
            </v-tooltip>
          </template>

          <v-list>
            <v-list-item
              v-for="lang in ['nl', 'en']"
              :key="lang"
              :active="locale === lang"
              @click="changeLanguage(lang)"
            >
              <v-list-item-title>
                {{ $t(`navigation.languages.${lang}`) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center ga-3">
          <img :src="logo" alt="Logo" height="60" />

          <div>
            <router-link :to="{ name: 'home' }">
              <h1>Anne van der Aar</h1>
            </router-link>

            <p v-if="smAndUp">
              {{ $t('navigation.forWebsite') }}
            </p>
          </div>
        </div>

        <div class="d-none d-md-flex ga-3">
          <router-link
            v-for="page in pages"
            :key="page.name"
            :to="{ name: page.route }"
          >
            {{ page.name }}
          </router-link>
        </div>

        <v-icon
          icon="fas fa-bars"
          class="d-flex d-md-none"
          @click="drawer = !drawer"
        />
      </div>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="page in pages"
        :key="page.name"
        @click="navigate(page.route)"
      >
        <v-list-item-title>{{ page.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useDisplay } from "vuetify/framework";
import logo from '@/images/logos/logo-anne-white.png';

const router = useRouter();
const { locale } = useI18n();
const drawer = ref(false);
const { smAndUp } = useDisplay();

const links = [
  { icon: 'fab fa-telegram', link: 'https://t.me/annevanderaar' },
  { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/anne-van-der-aar/' },
  { icon: 'fab fa-github', link: 'https://github.com/annevanderaar' },
];

const pages = [
  { name: 'Anegy', route: 'anegy' },
  { name: 'Jewelry by Sil', route: 'jewelry-by-sil' },
  { name: 'Montira massage', route: 'montira-massage' },
  { name: 'Thai wok to go', route: 'thai-wok-to-go' },
];

function openLink(link) {
  window.open(link, '_blank')
}

function changeLanguage(lang) {
  locale.value = lang
}

function navigate(routeName) {
  router.push({ name: routeName })
  drawer.value = false
}
</script>
