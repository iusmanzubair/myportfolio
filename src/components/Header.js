import React from "react";
import logo from "../assets/logo.svg";
function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#"><img src={logo} alt="" /></a>
          <button className="btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
