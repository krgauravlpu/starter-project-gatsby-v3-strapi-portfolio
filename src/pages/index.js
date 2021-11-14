import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Layout from '../components/Layout'
import { PROJECTLIST } from '../constants/projects'

const IndexPage = () => {
  const featuredProductList = PROJECTLIST.filter((el) => el.isFeature);
  return <Layout>
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={featuredProductList} title="featured projects" showLink />
  </Layout>
}

export default IndexPage
