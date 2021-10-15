import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Testimonial from "../components/testimonial"
import Team from "../components/team"

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Testimonial />
      <Team />
    </Layout>
  )
}
