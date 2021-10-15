export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("tradewise-user")
    ? JSON.parse(window.localStorage.getItem("tradewise-user"))
    : {}
export const setUser = user => isBrowser() && window.localStorage.setItem("tradewise-user", JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const logout = firebase => {
  return new Promise(resolve => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({})
        resolve()
      })
  })
}
