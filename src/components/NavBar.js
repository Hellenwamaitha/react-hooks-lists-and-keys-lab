import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <ul>
      <li><a href="#home">home</a></li>
      <li><a href="#about">about</a></li>
      <li><a href="#projects">projects</a></li>
    </ul>

    
    }
    </nav>;
}

export default NavBar;
