// import tailwind styles
import './styles/main.css'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { SiHomeassistant, GiHamburgerMenu, IoClose } from 'oh-vue-icons/icons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

addIcons(SiHomeassistant, GiHamburgerMenu, IoClose)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
