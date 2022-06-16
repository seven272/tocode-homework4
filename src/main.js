import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import routers from '@/routes.js'
import '@/assets/scss/main.scss'

const app = createApp(App)

app.use(store)
app.use(routers)
app.mount('#app')
