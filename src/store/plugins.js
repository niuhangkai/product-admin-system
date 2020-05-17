export const vuexToLocalStorage = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'USERS') {
      const { user, token } = mutation.payload
      sessionStorage.setItem('users', JSON.stringify(user))
      sessionStorage.setItem('token', 'Bearer ' + token)
    }
  })
}
