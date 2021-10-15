import * as React from "react"
import { navigate } from "@reach/router"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import firebase from "gatsby-plugin-firebase"
import { /* setUser, */ isLoggedIn } from "../utils/auth"
import Seo from "./seo"

export default function Login({ location }) {
  if (isLoggedIn()) {
    if (location && location.state && location.state.destination) {
      navigate(location.state.destination)
    } else {
      navigate(`/`)
    }
  }

  // const getUiConfig = auth => {
  //   return {
  //     signInFlow: "popup",
  //     signInOptions: [{ provider: auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: false }],
  //     callbacks: {
  //       signInSuccessWithAuthResult: result => {
  //         setUser(result.user)
  //         if (location && location.state && location.state.destination) {
  //           navigate(location.state.destination)
  //         } else {
  //           navigate(`/`)
  //         }
  //       },
  //     },
  //   }
  // }

  return (
    <div>
      <Seo title="Login" />
      <div>
        <p>Please Sign In</p>
        {/* {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()} />} */}
      </div>
    </div>
  )
}
