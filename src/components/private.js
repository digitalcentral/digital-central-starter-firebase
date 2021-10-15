import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../utils/auth"

export default ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate(`/app/login`, {
      state: { destination: rest.uri },
    })
    return null
  }
  return <Component {...rest} />
}
