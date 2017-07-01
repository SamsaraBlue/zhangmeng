import Vue from 'vue'
import router from '../router'
import vueg from 'vueg'

Vue.use(vueg, router)

const options = {
  duration: '0.3',
  firstEntryDisable: false,
  firstEntryDuration: '.6',
  forwardAnim: 'fadeInRight',
  backAnim: 'fadeInLeft',
  sameDepthDisable: false,
  tabs: [
    {
      name: 'home'
    },
    {
      name: 'friends'
    },
    {
      name: 'discover'
    },
    {
      name: 'my'
    }
  ],
  tabsDisable: false,
  disable: false
}
Vue.use(vueg, router, options)

export default options
