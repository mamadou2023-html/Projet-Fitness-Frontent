import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
/*import '../node_modules/bootstrap/css/bootstrap.css'
import '../node_modules/bootstrap/js/bootstrap.bundle'*/
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
