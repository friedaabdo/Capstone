import { createApp } from 'vue'
// import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Translate from "./components/Translate.vue";
import Attractions from "./components/Attractions.vue"
import Startup from './components/Startup.vue'
import router from './router'


const app = createApp(App).use(router)

app. component('start-up', Startup)
app.component('translate-section', Translate)
app.component('attractions-section', Attractions)

app.mount('#app')
