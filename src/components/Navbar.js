import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom';
import OfferModal from './OfferModal';



function Navbar() {
  //console.log("navbar rendered");
    return (
      <>
        <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
            <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">

    <Link to="/" className="navbar-brand">
      <img id="nav-logo" src="https://www.linkpicture.com/q/27b699d963b944bfa25240f15960b618.png" alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
      <span className="nav-title">Go</span><span className="nav-title-to">Meal</span>
    </Link>
    
    </nav>
    <div className="d-inline-flex m-2 logincategory">
      <Link to="" className="aboutHotel btn-lg text-white hoverMe" data-bs-toggle="offcanvas" data-bs-target="#about-hotel" data-bs-keyboard="true" role="button">About</Link>
      <div className="">
      <Link to="/login"><button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2">Login</button></Link></div>
      <div className="">
      <Link to="/register"><button type="button" className="btn btn-light btn-lg me-2">Sign up</button></Link>
        </div>
        </div>
    
        </div>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="about-hotel">
          <div className="offcanvas-header">
            <h2 className="offcanvas-title" id="about-hotel">Who Are We?</h2>
           <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body px-3">
          <hr/>
            <div>
            We serve delicious breakfast, lunch and dinner to students all over the town so that they can enjoy good and healthy food .  Our experienced chefs prepare deliciously fresh meals using the best, locally sourced ingredients.

            Our menus are planned to help the students eat a balanced diet through the week.
            We constantly review our food and ingredient suppliers to ensure we use the best quality ingredients for our students. We organise special meal days and even celebration days where students can try out different healthy food options they may not otherwise experience.
            Our food is super fresh and organic .Also the pricing and menu composition are flexible and we deliver it upon the requirement of the food services and location. 
            Just click on the Order Online button to experience the taste of authentic natural food.</div>
            <div>
            Reach out to us on:
            +49 176 12345678
            abc@fooddelivery.com
           </div>
         <hr/>
         
        </div>
      </div>
      <OfferModal/>
      </>
    )
}

/*<div className="d-flex flex-wrap">
         <Link to="/menu"><button type="button" className="btn btn-outline-success rounded-pill btn-sm m-2 mx-1">Menu</button></Link>
         <Link to="/"><button type="button" className="btn btn-outline-warning rounded-pill btn-sm m-2 mx-1">Hours & Location</button></Link>
         <Link to="/login"><button type="button" className="btn btn-outline-danger rounded-pill btn-sm m-2 mx-1">Login</button></Link>
         <Link to="/register"><button type="button" className="btn btn-outline-dark rounded-pill btn-sm m-2 mx-1">Signup</button></Link>
         <Link to="#"><button type="button" className="btn btn-outline-dark btn-sm rounded-pill disabled m-2 mx-1">Admin</button></Link>
         <Link to="#"><button type="button" className="btn btn-outline-primary btn-sm rounded-pill m-2 mx-1" data-bs-toggle="offcanvas" data-bs-keyboard="true" data-bs-target="#offerModal">Offers</button></Link>
         </div>*/

export default React.memo(Navbar)
