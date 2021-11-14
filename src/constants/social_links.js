import React from "react"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaHackerrank,
  FaLinkedinIn
} from "react-icons/fa"
import { Link } from "gatsby";


const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/krgauravlpu/",
  },
  {
    id: 2,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/gauravk__singh/",
  },
  {
    id: 3,
    icon: <FaHackerrank className="social-icon"></FaHackerrank>,
    url: "https://www.hackerrank.com/krgauravlpu1",
  },
  {
    id: 4,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/in/krgauravlpu/",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/krgaurav123",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id} >
      <a href={link.url} target="_blank" className="social-link">{link.icon}</a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`} >
      {links}
    </ul>
  )
}
