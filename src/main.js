import { createApp } from 'vue';
import '@/css/app.css';
import 'vuetify/styles';
import App from '@/app.vue';
import i18n from '@/i18n'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { en, nl } from 'vuetify/locale';
import { createVuetify } from 'vuetify';
import router from '@/router';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: true,
        colors: {
          primary: '#1b1b1f',
          secondary: '#8B0000',
        }
      }
    }
  },
  locale: {
    locale: 'nl',
    fallback: 'en',
    messages: { en, nl },
  },
})

createApp(App)
  .use(vuetify)
  .use(router)
  .use(i18n)
  .mount('#app')
