import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    text: `Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Web Design",
    text: `Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "App Development",
    text: `Application development is the process of creating a computer program or a set of programs to perform the different tasks that a business requires.`,
  },
]

export default services
