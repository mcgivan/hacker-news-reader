import React from "react";
import { Link } from "@reach/router";
import "./nav.css";
import { BASEPATH } from "../../utils/constants";

export default function Nav({ children }) {
  const getCurrentClassName = ({ isCurrent, href }) => ({
    className:
      href === "/hacker-news-reader" && isCurrent
        ? "current"
        : isCurrent
        ? "current"
        : "",
  });
  return (
    <div className="wrapper container">
      <nav className="nav-wrapper">
        <ul className="top-menu">
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to={`${BASEPATH}/`}>
              New Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to={`${BASEPATH}/best`}>
              Best Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to={`${BASEPATH}/top`}>
              Top Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to={`${BASEPATH}/ask`}>
              Ask Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to={`${BASEPATH}/job`}>
              Job Stories
            </Link>
          </li>
          <li className="top-menu-link">
            <Link getProps={getCurrentClassName} to={`${BASEPATH}/show`}>
              Show Stories
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
