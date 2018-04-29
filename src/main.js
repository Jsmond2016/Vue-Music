import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import Router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

fastclick.attach(document.body)

/* eslint-disable  no-new  */

fastclick.attach(document.body)

new Vue({
  el: '#app',
  render: h => h(App)
})
