import React from "react";
import { Link } from "@reach/router";

export default function Nav({ children }) {
  const getCurrentClassName = ({ isCurrent }) => ({
    className: isCurrent ? "current" : "",
  });
  return (
    <div className="wrapper container">
      <nav className="nav-wrapper">
        <ul className="top-menu">
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to="./">
              New Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to="./best">
              Best Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to="./top">
              Top Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to="./ask">
              Ask Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to="./job">
              Job Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to="./show">
              Show Stories
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
