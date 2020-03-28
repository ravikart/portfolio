import React from "react";

function NavBar() {
  return (
    <div className="nav-bar nav-border">
      <div className="nav">
        <div className="logo-flex">
          <div className="image-src"></div>
          <span>Portfolio</span>
        </div>
        <nav className="nav-items">
          <ul className="ul-nav">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Education</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Works</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
