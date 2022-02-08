import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./NavBar.css";

function MyNavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);



  const [shopClick, setshopClick] = useState(false);

  const shopHandleClick = () => setshopClick(!shopClick);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            LOGO
          </NavLink>
            
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link
                      activeClass="active" to="home" style={{cursor:"pointer"}}  spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                      Domů
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active" to="about" style={{cursor:"pointer"}} spy={true} smooth={true} offset={50} duration={500} onClick={handleClick} >
                      O mě
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active" to="contact" style={{cursor:"pointer"}}  spy={true} smooth={true} offset={50} duration={500} onClick={handleClick} >
                      Kontakt
                    </Link>
                  </li>
                  
                </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <div className="nav-shopCart">
                <NavLink exact to="/myShoppingCart"
                      activeClassName="active"
                      className="nav-links"
                      onClick={shopHandleClick}>
                  <i class="fas fa-shopping-cart"></i>
                </NavLink>
          </div>
        </div>
        
      </nav>
    </>
  );
}

export default MyNavBar;