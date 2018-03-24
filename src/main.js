// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueMaterial from 'vue-material'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

// Bootstrap
Vue.use(BootstrapVue)

/* eslint-disable no-new */
// eslint-disable-next-line
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
