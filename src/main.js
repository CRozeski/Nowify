import Vue from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import App from './App.vue'


import '@/styles/global/reset.scss'
import '@/styles/global/app.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')