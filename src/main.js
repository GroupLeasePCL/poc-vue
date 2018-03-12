// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import {
  Table,
  TableColumn
} from 'element-ui'
import App from './App.vue'
import 'element-theme-default'

Vue.config.productionTip = false

Vue.use(Table)
Vue.use(TableColumn)

/* eslint-disable no-new */
// eslint-disable-next-line
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
