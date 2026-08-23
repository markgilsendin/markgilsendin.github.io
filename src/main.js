import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(router)

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID

const allowedHostnames = [
  'markgilsendin.github.io',
  'localhost',
  '127.0.0.1'
]

if (gaId && allowedHostnames.includes(window.location.hostname)) {
  app.use(VueGtag, {
    property: {
      id: gaId,
      params: { send_page_view: true }
    },
    useGtag: true
  }, router)
}

app.mount('#app')