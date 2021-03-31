import React from 'react';
import LandingImg from '../img/wood-pic.jpeg';
import AppHeader from './AppHeader.js';
//import { Link } from "react-router-dom";
import './LandingPage.css';
import ItemGrid from './ItemGrid.js';

const LandingPage = () => {
  return (
    <div className="App">
      <AppHeader />
        <br />
        <br />
          <img src={LandingImg} className="App-logo" alt="wooden house" />
        <br />
        <br />
        <hr className="hr"/>
          <section className="About-Header">
            About
          </section>
          <article className="About-Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas 
          quis ipsum suspendisse. Felis bibendum ut tristique et egestas quis ipsum 
          suspendisse ultrices. Amet dictum sit amet justo donec. Faucibus interdum 
          posuere lorem ipsum dolor sit. Quis lectus nulla at volutpat diam ut venenatis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas 
          quis ipsum suspendisse. Felis bibendum ut tristique et egestas quis ipsum 
          suspendisse ultrices. Amet dictum sit amet justo donec. Faucibus interdum 
          posuere lorem ipsum dolor sit. Quis lectus nulla at volutpat diam ut venenatis.
          </article>
          <hr className="hr"/>
          <section className="App-Link">
            Gallery
          </section>
        <ItemGrid className="Item-Grid" />
    </div>
  );
}

export default LandingPage;