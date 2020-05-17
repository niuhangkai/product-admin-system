const TokenKey = 'token'

export function getToken () {
  return window.sessionStorage.getItem(TokenKey)
}