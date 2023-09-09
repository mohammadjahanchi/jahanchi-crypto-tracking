import React,{useRef} from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import { FaCoins } from 'react-icons/fa'
const NavbarComponent = () => {
    
    
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div>
      <FaCoins className="navbar-logo" />
      <span className="navbar-logo-text">Crypto Tracking</span>
      </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/"   >Home</Link>
        <Link class="nav-link" to="faq" >FAQ</Link>
        <Link class="nav-link" to="about-us"  >about us</Link>
        <Link class="nav-link" to="contact-us"  >contact us</Link>
        
      </div>
    </div>
  </div>
</nav>
    )
};
export default NavbarComponent