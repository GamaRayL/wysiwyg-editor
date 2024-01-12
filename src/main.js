import App from './App.vue'
import {createApp} from 'vue'
import router from "@/router/router.js";
import "@/assets/styles/global.scss"

const app = createApp(App)

app
    .use(router)
    .mount('#app')

