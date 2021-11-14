import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import SocialLinks from "../constants/social_links"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
{
  file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

const Hero = () => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"> </div>
          <h1>i'm Kumar Gaurav</h1>
          <h4>Web Developer</h4>
          <Link to="/contact" className="btn">contact me</Link>
          <SocialLinks></SocialLinks>
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
