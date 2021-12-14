import { createApp } from 'vue'
import App from './views/App.vue'
import './index.css'
import router from './router'
import store from "./store"
import VuePaginate from 'vue-paginate'
createApp(App).use(router).use(store).use(VuePaginate).mount('#app')

