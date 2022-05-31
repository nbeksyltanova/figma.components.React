import logo from "../img/Logo.png";
import search from "../img/mdi_search.png";
import React from "react";

const Header = () => {
  return (
    <div className="head">
      <div className="header">
        <header class="menu">
          <ul>
            <li>
              <img src={logo} />
            </li>
            <li>
              <a href="">blog</a>
            </li>

            <li>
              <a href="">contact</a>
            </li>

            <li className="tr">
              <a href="">adout</a>
            </li>

            <li>
              <img src={search} />
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
