import { Route } from "react-router-dom";
import './components/Gallery.css';
import './components/LandingPage.css';
import LandingPage from './components/LandingPage.js';
import Gallery from './components/Gallery.js';
import Carousel from './components/Carousel.js';

function App() {
  return (
    <div className="App">
    <Route path="/gallery" component={Gallery} />
    <Route path="/carousel" component={Carousel} />
    <Route exact path="/" component={LandingPage} />
  </div>
  );
}

export default App;
