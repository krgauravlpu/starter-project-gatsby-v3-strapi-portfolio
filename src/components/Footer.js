import React from "react"
import SocialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks styleClass="footer-links" />
      <h4>copyright&copy;{new Date().getFullYear()}
        <span>&nbsp;KG&nbsp;</span>all rights reserved
      </h4>
    </footer>
  )
}

export default Footer
