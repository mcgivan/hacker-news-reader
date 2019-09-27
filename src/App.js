import React from "react";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Story from "./components/Story";
import MainFeed from "./components/MainFeed";
import UserPage from "./components/UserPage";

function App() {
  return (
    <Router basepath="/hacker-news-reader" >
      <Nav path="/">
        <MainFeed path="/*" />
        <Story path="/story/:itemId" />
        <UserPage path="/user/:userId" />
      </Nav>
    </Router>
  );
}

export default App;
