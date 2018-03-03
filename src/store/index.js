import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

// 按照cart示列使用vuex
export default new Vuex.Store({
  getters,
  modules: {
    user
  }
})
