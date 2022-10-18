import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import "./components/HeaderComponent"
export default function Nav(){

  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">MENU 1</Link>
              <Link to="/shop">MENU 2</Link>
           </ul>
        </div>
  );

}