import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from "./router"
import utils from './utils'

const app = createApp(App)
app.use(router).use(utils)
app.mount('#app')
