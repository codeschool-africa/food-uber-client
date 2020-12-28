import React from "react"
import { Link } from "react-router-dom"

import "./about.sass"
const About = () => {
  return (
    <section className="about">
      <div className="details">
        <h2>Get served by the best chefs in town</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          perferendis amet assumenda, accusamus vitae accusantium iste a
          repellendus adipisci officia eius quas quod. Laborum sunt amet
          architecto quibusdam, suscipit dignissimos.
        </p>
        <Link to="/about" className="btn btn-primary">
          About Us <span>&raquo;</span>
        </Link>
      </div>
      <div className="chefs">
        {/* <img src="" alt=""/> */}
        <div></div>
      </div>
    </section>
  )
}

export default About
