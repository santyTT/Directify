import React from "react";
import '../styles/header.css';

const header = () => {
  return (
    <header>
      <nav>
        <img
          src="https://directify.app/images/logo-dark.png"
          alt="logoWebSite"
          className="logo"
        />
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">Pircing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
          <li>
            <a href="#">Discord</a>
          </li>
        </ul>
      </nav>
      <button>Login</button>
    </header>
  );
};

export default header;
