<template>
  <v-app-bar :elevation="1" :height="100" class="c-background">
    <div class="d-flex justify-space-between align-center w-100 px-4 pb-1">
        <div class="d-flex align-center ga-3">
          <img :src="logo" alt="Logo" height="60" />

          <div>
            <router-link :to="{ name: 'home' }">
              <h1 class="text-no-wrap">
                Anne van der Aar
              </h1>
            </router-link>

            <p v-if="smAndUp" class="text-overline mt-n2">
              {{ $t('navigation.forWebsite') }}
            </p>
          </div>
        </div>

        <div class="d-flex flex-column ga-4">
          <div class="d-flex ga-3 justify-end align-center w-100">
            <v-icon
              v-for="link in socialLinks"
              :key="link.icon"
              :icon="link.icon"
              class="cursor-pointer c-link d-none d-md-block"
              @click="openLink(link.link)"
            />

            <v-menu>
              <template #activator="{ props }">
                <v-icon
                  v-bind="{ ...props }"
                  icon="fas fa-globe"
                  class="cursor-pointer c-link pt-md-1"
                />
              </template>

              <v-list>
                <v-list-item
                  v-for="lang in availableLanguages"
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

            <v-icon
              icon="fas fa-bars"
              class="d-flex d-md-none"
              @click="drawer = !drawer"
            />
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
        </div>
      </div>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="c-background"
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

    <div class="d-flex ga-2 ps-4">
      <v-icon
        v-for="link in socialLinks"
        :key="link.icon"
        :icon="link.icon"
        color="white"
        class="cursor-pointer c-link"
        @click="openLink(link.link)"
      />
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify/framework';
import { openLink, socialLinks } from '@/utilities/links.util';
import logo from '@/images/logos/logo-anne-white.png';

const router = useRouter();
const { locale } = useI18n();
const drawer = ref(false);
const { smAndUp } = useDisplay();

const storageKey = 'portfolio-language';
const availableLanguages = ['nl', 'en'];

const pages = [
  { name: 'Anegy', route: 'anegy' },
  { name: 'Jewelry by Sil', route: 'jewelry-by-sil' },
  { name: 'Montira massage', route: 'montira-massage' },
  { name: 'Thai wok to go', route: 'thai-wok-to-go' },
  { name: 'Sons of the Sea Customs', route: 'sons-of-the-sea-customs' },
  { name: 'ByYourSite', route: 'by-your-site' },
];

onMounted(() => {
  const savedLanguage = localStorage.getItem(storageKey);

  if (savedLanguage && availableLanguages.includes(savedLanguage)) {
    locale.value = savedLanguage;
  }
});

function changeLanguage(lang) {
  if (!availableLanguages.includes(lang)) {
    return;
  }

  locale.value = lang;
  localStorage.setItem(storageKey, lang);
}

function navigate(routeName) {
  router.push({ name: routeName });
  drawer.value = false;
}
</script>
