

import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css"

const Navigation = () => {
  return (
    <nav className="my-nav">
      <ul className="my-nav-list">
        <li className="my-nav-item">
          <Link to="/" className="my-nav-link">
            First Half
          </Link>
        </li>
        <li className="my-nav-item">
          <Link to="/articles" className="my-nav-link">
            Second Half
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
