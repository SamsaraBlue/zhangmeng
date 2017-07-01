// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mint from '@/library/mint'
import vueg from '@/library/vueg'
import axiosJs from '@/library/axios'
import 'vueg/css/transition-min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mint,
  store,
  vueg,
  axiosJs,
  template: '<App/>',
  components: { App }
})
