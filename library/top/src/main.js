/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
    
// Plugins
import { registerPlugins } from '@/plugins'

// router
import router from './router'

const app = createApp(App)

registerPlugins(app)
app.mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify'
// import router from './router' 

// Vue.config.productionTip = false
 
// new  Vue ({
//   router, 
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')