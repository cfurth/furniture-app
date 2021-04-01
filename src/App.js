import { Route } from "react-router-dom";
import './components/Gallery.css';
import './components/LandingPage.css';
import LandingPage from './components/LandingPage.js';
import Gallery from './components/Gallery.js';
import Carousel from './components/Carousel.js';
import Contact from './components/Contact.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
    <Route path="/gallery" component={Gallery} />
    <Route path="/carousel" component={Carousel} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route exact path="/" component={LandingPage} />
  </div>
  );
}

export default App;
