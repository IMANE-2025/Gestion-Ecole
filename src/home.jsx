import React from 'react'
import student from './Etudiants/student'
import LoginEnseignant from './LoginEnseignant'

function home() {
  return (
    
    <>
    <link href="img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Handlee&family=Nunito&display=swap"
    rel="stylesheet"
  />
  {/* Font Awesome */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  {/* Flaticon Font */}
  <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
  {/* Libraries Stylesheet */}
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Navbar Start */}
  <div className="container-fluid bg-light position-relative shadow">
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
      <a
        href=""
        className="navbar-brand font-weight-bold text-secondary"
        style={{ fontSize: 50 }}
      >
        <i className="flaticon-043-teddy-bear" />
        <span className="text-primary">ECOLE FLORES</span>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div className="navbar-nav font-weight-bold mx-auto py-0">
          <a href="home" className="nav-item nav-link active">
            Home
          </a>
          <a href="Etudiants/student" className="nav-item nav-link">
            STUDENT
          </a>
          <a href="LoginEnseignant" className="nav-item nav-link">
            TEACHER
          </a>
          
          <a href="administrator" className="nav-item nav-link">
            ADMINISTRATOR
          </a>
          
          
        </div>
        <a href="" className="btn btn-primary px-4">
          Join Class
        </a>
      </div>
    </nav>
  </div>
  {/* Navbar End */}
  {/* Header Start */}
  <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
    <div className="row align-items-center px-3">
      <div className="col-lg-6 text-center text-lg-left">
        <h4 className="text-white mb-4 mt-5 mt-lg-0">Kids Learning Center</h4>
        <h1 className="display-3 font-weight-bold text-white">
          New Approach to Kids Education
        </h1>
        <p className="text-white mb-4">
          Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed
          sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed
          ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo
          dolore.
        </p>
        <a href="" className="btn btn-secondary mt-1 py-3 px-5">
          Learn More
        </a>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <img className="img-fluid mt-5" src="img/header.png" alt="" />
      </div>
    </div>
  </div>

  </>

  )
}

export default home