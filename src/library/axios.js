import Vue from 'vue'
import axiosJs from 'axios'

axiosJs.defaults.timeout = 5000

Vue.prototype.$axios = axiosJs

Vue.config.productionTip = false
