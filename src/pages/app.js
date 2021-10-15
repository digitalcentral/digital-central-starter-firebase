import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import Catalogue from "../components/catalogue"
// import PrivateRoute from "../components/privateRoute"
import Login from "../components/login"

export default function AppPage() {
  return (
    <Layout>
      <SEO title="Application to buy wholesale quality products" />
      <Router basepath="/app">
        {/* <Catalogue path="catalogue/australia" country="australia" xtransport="-" />
        <Catalogue path="catalogue/china" country="china" xtransport="-" />
        <Catalogue path="catalogue/netherlands" country="netherlands" xtransport="-" />
        <Catalogue path="catalogue/turkey" country="turkey" xtransport="-" /> */}
        <Login path="/login" />
      </Router>
    </Layout>
  )
}
