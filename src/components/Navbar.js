import React from "react";
import "./navbar.css";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="logo">
        <h2>divquan</h2>
      </div>
      <div className="links">
        <a
          href="https://github.com/divquan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/divine-quansah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/divine_quansah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterSquare />
        </a>
      </div>
    </>
  );
};

export default Navbar;
