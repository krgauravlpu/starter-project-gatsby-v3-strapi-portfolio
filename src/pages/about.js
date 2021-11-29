import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import Image from 'gatsby-image';
import Title from '../components/Title';
import { ABOUT } from '../constants/about';


const About = ({ data }) => {

  const { title, description, stack } = ABOUT;
  const fluid = data?.file?.childImageSharp?.fluid;
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{description}</p>
            <div className="about-stack">
              {
                stack.map((item, index) => {
                  return <span key={index} >
                    {item}
                  </span>
                })
              }
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
