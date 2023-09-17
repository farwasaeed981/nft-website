import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid mt-1">
    <a className="navbar-brand white-color" href="#">QLAB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto" style={{border: '1px solid white',
    borderRadius: '25px'}}>
        <li className="nav-item">
          <Link className="nav-link active white-color" aria-current="page" to= '/' >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active white-color" to = '/projects' >Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active white-color" to = '/about-us'>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active white-color" to = '/terms-and-conditions'>Terms And Conditions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active white-color" to = '/contact-us'>Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-primary" style={{border: '1px solid white ', borderRadius: '25px'}}>Contact Us</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar