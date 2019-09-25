import React from "react";
import { Router, Link } from "@reach/router";
import Feed from './components/Feed';

const Nav = ({ children }) => (
  <div className="wrapper">
    <nav>
      <ul className="top-menu">
        <li className="top-menu-link">
          <Link to="/">Feed</Link>
        </li>
        <li className="top-menu-link">
          <Link to="best">Best Stories</Link>
        </li>
        <li className="top-menu-link">
          <Link to="top">Top Stories</Link>
        </li>
      </ul>
    </nav>
    {children}
  </div>
);

const BestStories = () => <div>Best stories</div>;

const TopStories = () => <div>Top stories</div>;

function App() {
  return (
    <Router>
      <Nav path="/">
        <Feed path="/" />
        <BestStories path="best" />
        <TopStories path="top" />
      </Nav>
    </Router>
  );
}

export default App;
