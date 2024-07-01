// import tailwind styles
import './styles/main.css'

// icons library
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  SiHomeassistant,
  GiHamburgerMenu,
  IoClose,
  MdSunny,
  MdKeyboardarrowleft,
  MdKeyboardarrowright
} from 'oh-vue-icons/icons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

addIcons(
  SiHomeassistant,
  GiHamburgerMenu,
  IoClose,
  MdSunny,
  MdKeyboardarrowleft,
  MdKeyboardarrowright
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
