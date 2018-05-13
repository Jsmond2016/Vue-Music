import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'

fastclick.attach(document.body)

// or with options
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
/* eslint-disable  no-new  */

fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
