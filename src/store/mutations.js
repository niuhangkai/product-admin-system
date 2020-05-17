import * as types from './mutation-types'

const mutations = {
  [types.USERS] (state, payload) {
    console.log(payload)
    state.users = payload
  }
}

export default mutations
