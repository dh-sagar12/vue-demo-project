import { createApp } from "vue";
import App from './App.vue';
import $bus from './utils/Events'
import router from "./utils/routes";
import $pages from './utils/data'


const app = createApp(App)


app.use(router)

app.provide('$pages', $pages)
app.provide('$bus', $bus)
// app.config.globalProperties.$bus = $bus
// app.config.globalProperties.$pages  =  $pages

app.mount('#app')