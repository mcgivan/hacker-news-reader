import React, { useEffect, useRef } from "react";
import { Router } from "@reach/router";
import Nav from "./components/NavWrapper/Nav";
import Story from "./components/Story/Story";
import MainFeed from "./components/MainFeed";
import UserPage from "./components/UserPage/UserPage";
import { BASEPATH } from "./utils/constants";
import { AppContextProvider } from "./components/AppContext/AppContext";

const scrollHandler = (button) => () => {
  if(window.scrollY > window.innerHeight*2){
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
}

const scrollTop = (event) => {
  event.preventDefault();
  document.body.scrollIntoView({behavior: 'smooth'});
}

function App() {
  const scrollToTopLink = useRef();
  useEffect(()=>{
    if(scrollToTopLink.current === null) {
      return;
    }
    let handler = scrollHandler(scrollToTopLink.current);
    window.addEventListener('scroll', handler);

    return ()=>window.removeEventListener('scroll', handler);

  }, [scrollToTopLink]);

  return (
    <>
      <AppContextProvider>
        <Router basepath={`${BASEPATH}`} >
          <Nav path="/" default>
            <MainFeed path="/*" />
            <Story path="story/:itemId" />
            <UserPage path="user/:userId" />
          </Nav>
        </Router>
        <a ref={scrollToTopLink} href="" className="scroll-top" onClick={(e)=>scrollTop(e)} >Top</a>
      </AppContextProvider>
    </>
  );
}

export default App;
