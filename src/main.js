import { createApp } from 'vue'
import App from './App.vue'
import Translate from "./components/Translate.vue";
import Attractions from "./components/Attractions.vue"

const app = createApp(App)

app.component('translate-section', Translate)
app.component('attractions-section', Attractions)

app.mount('#app')
