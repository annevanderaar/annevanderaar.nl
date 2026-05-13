<template>
  <ProjectShow
    :title="$t('projects.sonsOfTheSeaCustoms.title')"
    :type="$t('projects.sonsOfTheSeaCustoms.type')"
    :description="$t('projects.sonsOfTheSeaCustoms.description')"
    :featured-image="featuredImage"
    website-url="https://sonsoftheseacustoms.nl"
    :technologies="['WordPress', 'WooCommerce', 'CSS', 'Design']"
    :about="$t('projects.sonsOfTheSeaCustoms.about')"
    :highlights="highlights"
    :images="images"
  />
</template>

<script setup>
import ProjectShow from '../components/project-show.vue';
import featuredImage from '../images/sonsoftheseacustoms/featured.png';
import store from '../images/sonsoftheseacustoms/store.png';
import footer from '../images/sonsoftheseacustoms/footer.png';
import account from '../images/sonsoftheseacustoms/account.png';
import social from '../images/sonsoftheseacustoms/social.png';
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const highlights = computed(() => [
  {
    title: t('projects.sonsOfTheSeaCustoms.highlights.woocommerce.title'),
    text: t('projects.sonsOfTheSeaCustoms.highlights.woocommerce.text'),
    icon: 'fas fa-cart-shopping',
  },
  {
    title: t('projects.sonsOfTheSeaCustoms.highlights.animations.title'),
    text: t('projects.sonsOfTheSeaCustoms.highlights.animations.text'),
    icon: 'fas fa-wand-magic-sparkles',
  },
  {
    title: t('projects.sonsOfTheSeaCustoms.highlights.languages.title'),
    text: t('projects.sonsOfTheSeaCustoms.highlights.languages.text'),
    icon: 'fas fa-language',
  },
]);

const images = [store, footer, account, social];
</script>
