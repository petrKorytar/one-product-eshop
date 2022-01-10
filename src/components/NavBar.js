import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Domů
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                O mě
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Kontakt
              </NavLink>
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
