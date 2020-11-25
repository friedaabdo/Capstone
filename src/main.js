import { createApp } from 'vue'
// import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Translate from "./components/Translate.vue";
import Attractions from "./components/Attractions.vue"
import router from './router'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/translate', component: Translate },
//         { path: '/attractions', component: Attractions }
//     ]
// })

const app = createApp(App).use(router)

// app.use(router)

app.component('translate-section', Translate)
app.component('attractions-section', Attractions)

app.mount('#app')
