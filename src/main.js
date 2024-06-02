import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
const options = {
    // You can set your default options here
};

app.use(Toast, options)
app.use(pinia)
app.mount('#app')
