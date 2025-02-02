import React from "react"
import Seo from "../components/Seo"
import Layout from '../components/Layout'

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mwkadplb" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" name="name" className="form-control" />
              <input type="email" placeholder="email" name="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="message" name="message" className="form-control" />
            </div>
            <button type="submit" className="submit-btn btn">Submit Here</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
