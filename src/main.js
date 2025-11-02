import { createApp } from 'vue'
import App from './App.vue'
// Importar los estilos globales
import './assets/reset.css'
import './assets/style.css'
import './assets/productos.css'

import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
