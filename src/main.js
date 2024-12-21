import { createApp } from 'vue'
import '@/assets/css/style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import './mock/index.js'
import i18n from './i18n/index.js';
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
pinia.use(persist)

app.use(router).use(Antd).use(i18n).use(pinia).mount('#app')
