import React from "react";
import { HashLink as Link } from "react-router-hash-link"; // Use HashLink for route-based scrolling

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Traco It
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link smooth to="/#about" className="page-scroll">
                About
              </Link>
            </li>
            <li>
              <Link smooth to="/#features" className="page-scroll">
                BackPack Trips
              </Link>
            </li>
            <li>
              <Link smooth to="/#portfolio" className="page-scroll">
                Getaways
              </Link>
            </li>
            <li>
              <Link smooth to="/#testimonials" className="page-scroll">
                Testimonials
              </Link>
            </li>
            <li>
              <Link smooth to="/#contact" className="page-scroll">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
