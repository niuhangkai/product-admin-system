import * as types from './mutation-types'

const mutations = {
  [types.USERS] (state, {user, token}) {
    state.user = user
    state.token = token
  },
  [types.LOGOUT] (state) {
    console.log(state, 'LOGOUTLOGOUT')
    for (let key in state) {
      state[key] = ''
    }
  }
}

export default mutations
