import {
    createApp
} from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from "./router"
import utils from './utils'
import './utils/qlgh_client_sdk.js'
// 
// import VConsole from "vconsole";
// new VConsole()

const app = createApp(App)
app.use(router).use(utils)
app.mount('#app')