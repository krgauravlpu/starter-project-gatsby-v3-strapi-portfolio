import React from "react"
import Projects from "../components/Projects"
import Layout from '../components/Layout'
import { PROJECTLIST } from '../constants/projects'

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="project-page">
        <Projects projects={PROJECTLIST} title="All Projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage
