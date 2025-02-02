import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title}></Title>
      <div className="section-center project-center">
        {projects.map((project, index) => {
          return (
            <Project key={index} index={index} {...project} />
          )
        })}
        {
          showLink && (
            <Link to="projects" className="btn center-btn" > projects</Link>
          )
        }
      </div>
    </section>
  )
}

export default Projects
