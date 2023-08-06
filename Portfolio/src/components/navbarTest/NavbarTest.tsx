import React from "react";
import "./navbarTest.css";

export const NavbarTest = () => {
  return (
    <nav id="nav__test">
      <div className="logo">George Ailenei</div>
      <div>
        <ul className="nav__links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
