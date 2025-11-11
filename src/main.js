import { createApp } from 'vue';
import '@/css/app.css';
import 'vuetify/styles';
import App from '@/app.vue';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
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
  }
})

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
