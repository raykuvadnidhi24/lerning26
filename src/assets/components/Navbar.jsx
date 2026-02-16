import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                NEtflix Home
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/netflixgames">
                Games
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixpodcast">
                podcast
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixstories">
                stories
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/teams">
                teams
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo1">
                usestatedemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo2">
                usestatedemo2
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo3">
                usestatedemo3
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/employees">
                employees
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo2">
                inputdemo2
              </Link>
            </li>
             {/* <li className="nav-item">
              <Link className="nav-link" to="/student">
                student
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo11">
                formdemo11
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/formdemo12">
                formdemo12
              </Link>
            </li>
           
            
          </ul>
        </div>
      </nav>
    </div>
  );
}


