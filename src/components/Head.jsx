import React from 'react'
import "./assets/dist/css/bootstrap.min.css"
import "./assets/dist/js/bootstrap.bundle.min.js"
import { Link } from 'react-router-dom'
import './Styles.css'
import logo from './images/logo.png'
const Head = () => {
  return (

    <main>
  <nav class="navbar navbar-expand-lg navbar-danger opacity-75 shadow pb-3 mb-5 bg-danger rounded" aria-label="Eighth navbar example">
    <div class="container">
      <span class="navbar-brand" href="#">Food For You</span>
      <img src={logo} alt='FoodCircles' style={{height:"50px"}}/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center " id="navbarsExample07">
        <ul className="navbar-nav mb-2 ">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Food">Food</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
         </ul>
      </div>
    </div>
  </nav>
  </main>

        
     
  )
}

export default Head