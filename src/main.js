import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(router)

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID

if (gaId) {
  app.use(VueGtag, {
    property: {
      id: gaId
    }
  }, router)
}

app.mount('#app')