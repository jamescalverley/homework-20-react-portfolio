import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar(){

  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">jc</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        </ul>
        <span class="navbar-text">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            about
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/work" className={location.pathname === "/work" ? "nav-link active" : "nav-link"}>
              work
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              contact
            </Link>
          </li>
        </ul>
        </span>
        
      </div>
    </nav>
  )
}

export default NavBar;