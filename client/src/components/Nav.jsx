import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/vote">Vote</Link>  
    </nav>
  )
}

export default Nav;