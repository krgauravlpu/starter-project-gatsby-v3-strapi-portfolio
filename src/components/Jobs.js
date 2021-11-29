import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { JOBS } from '../constants/job'


const Jobs = () => {
  const [value, setValue] = useState(0);
  const { company, position, date, description } = JOBS[value];
  return <section className="section jobs">
    <Title title="experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {JOBS.map((item, index) => {
          return <button onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`} key={index}>{item.company}</button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {description.map((item, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item}</p>
            </div>
          )
        })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">More Info</Link>
  </section>
}

export default Jobs
