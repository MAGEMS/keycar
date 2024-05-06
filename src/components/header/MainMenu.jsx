import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={pathname === "/" ? "current" : ""}>
          <Link to="/">Home</Link>
        </li>
        {/* End home page menu */}

        <li className={pathname === "/destinations" ? "current" : ""}>
          <Link to="/destinations">Our fleet</Link>
        </li>
        {/* End our-fleet single menu */}

        <li className={pathname === "/about" ? "current" : ""}>
          <Link to="/about">About Us</Link>
        </li>
        {/* End about single menu */}

        <li className={pathname === "/blog-list-v1" ? "current" : ""}>
          <Link to="/blog-list-v1">Blog</Link>
        </li>
        {/* End blogs single menu */}

        <li className={pathname === "/help-center" ? "current" : ""}>
          <Link to="/help-center">Help Center</Link>
        </li>
        {/* End blogs single menu */}

        <li className={pathname === "/contact" ? "current" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
