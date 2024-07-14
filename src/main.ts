import './assets/main.css'
import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light'
  },
  components,
  directives
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
