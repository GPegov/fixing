import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App'

import '@/assets/main.css'

const app = createApp(App)


createApp(App).use(createPinia()).mount('#app')



