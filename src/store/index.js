import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'
import { vuexToLocalStorage } from './plugins'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexToLocalStorage],
  actions,
  getters,
  mutations,
  state,
  // 用于检测修改来源是不是通过vuex，上线后就会关闭
  strict: process.env.NODE_ENV !== 'production'
})
