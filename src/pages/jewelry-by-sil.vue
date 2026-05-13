<template>
  <ProjectShow
    :title="$t('projects.jewelryBySil.title')"
    :type="$t('projects.jewelryBySil.type')"
    :description="$t('projects.jewelryBySil.description')"
    :featured-image="featuredImage"
    website-url="https://jewelrybysil.nl"
    :technologies="['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'CSS']"
    :about="$t('projects.jewelryBySil.about')"
    :highlights="highlights"
    :images="images"
    reverse
  />
</template>

<script setup>
import ProjectShow from '@/components/project-show.vue';
import featuredImage from '@/images/jewelrybysil/featured.png';
import checkout from '@/images/jewelrybysil/checkout.png';
import jewelry from '@/images/jewelrybysil/jewelry.png';
import product from '@/images/jewelrybysil/product.png';
import footer from '@/images/jewelrybysil/footer.png';
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const highlights = computed(() => [
  {
    title: t('projects.jewelryBySil.highlights.woocommerce.title'),
    text: t('projects.jewelryBySil.highlights.woocommerce.text'),
    icon: 'fas fa-cart-shopping',
  },
  {
    title: t('projects.jewelryBySil.highlights.products.title'),
    text: t('projects.jewelryBySil.highlights.products.text'),
    icon: 'fas fa-gem',
  },
  {
    title: t('projects.jewelryBySil.highlights.design.title'),
    text: t('projects.jewelryBySil.highlights.design.text'),
    icon: 'fas fa-wand-magic-sparkles',
  },
]);

const images = [jewelry, product, checkout, footer];
</script>
