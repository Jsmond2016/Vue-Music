
import * as types from './mutation-types'

const mutations = {
  // 所有参数中的state就是state.js中的内容
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    // state.playlist = list
    // state.playlist = JSON.parse(JSON.stringify(list))
    state.playlist = Object.assign([], list)
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    // state.sequenceList = list
    state.sequenceList = Object.assign([], list)
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, topList) {
    // state.topList = topList
    state.topList = Object.assign([], topList)
  },
  [types.SET_SEARCH_HISTORY](state, history) {
    // state.searchHistory = history
    state.playHistory = Object.assign([], history)
  },
  [types.SET_PLAY_HISTORY](state, history) {
    // state.playHistory = history
    state.playHistory = Object.assign([], history)
  },
  [types.SET_FAVORITE_LIST](state, list) {
    // state.favoriteList = list
    state.favoriteList = Object.assign([], list)
  }
}

export default mutations
