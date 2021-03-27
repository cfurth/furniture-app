import LandingImg from '../img/wood-pic.jpeg';
//import { Link } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        SB Classical Design
        <br />
          <img src={LandingImg} className="App-logo" alt="" />
        <br />
        <a
          className="App-link"
          href="/gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gallery
        </a>
      </header>
    </div>
  );
}

export default LandingPage;