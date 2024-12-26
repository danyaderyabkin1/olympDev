import './assets/main.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createYmaps } from 'vue-yandex-maps';
import type { VueYandexMaps } from 'vue-yandex-maps';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/material';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const settings: VueYandexMaps.PluginSettings = {
    apikey: '0da67294-9e85-4f49-8c7c-14ef9dc40be7',
};

app.use(createPinia())
app.use(router)
app.use(createYmaps(settings));
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


app.mount('#app')
