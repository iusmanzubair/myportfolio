import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="font-primary font-extrabold text-xl lg:text-3xl text-accent"
          >
            UsmanZubair
          </a>
          <Link to="contact" smooth={true} spy={true}>
            <button className="btn btn-sm">Work With Me</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
