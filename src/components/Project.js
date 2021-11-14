import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';

const query = graphql`
  {
    file(relativePath: {eq: "projects-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Project = ({ description, title, url, stack, github, index, project }) => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);
  return (
    <article className="project">
      <Image fluid={fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">{index + 1}. &nbsp; {project}</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((stack, index) => {
            return (
              <span key={index}>{stack}</span>
            )
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article >
  )
}

export default Project
