import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'// 通过 mutation 修改state的时候，会在控制台下进行 logger

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'// 在生产情况下使用严格模式，上线以后取消严格模式

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
