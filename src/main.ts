import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.errorHandler = () => {}
app.mount('#app')
