export const vuexToLocalStorage = store => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  const token = sessionStorage.getItem('token')
  if (user && token) {
    store.commit('USERS', {
      user,
      token
    })
  }

  store.subscribe((mutation, state) => {
    console.log(mutation, 'mutation')
    if (mutation.type === 'USERS') {
      const { user, token } = mutation.payload
      sessionStorage.setItem('user', JSON.stringify(user))
      sessionStorage.setItem('token', 'Bearer ' + token)
      state.user = user
      state.token = token
    } else if (mutation.type === 'LOGOUT') {
      console.log(mutation, 'mutationmutationmutation')
      sessionStorage.clear()
    }
  })
}
