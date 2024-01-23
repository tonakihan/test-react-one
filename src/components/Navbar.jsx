import React from "react";

function Navbar() {
  return(
    <nav className="navBar">
      <ul>
        <li><a href="/posts">Posts</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;