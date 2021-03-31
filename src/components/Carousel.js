import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import IMGOne from '../img/IMG1_Kitchen.JPG';
import checkmark from '../img/checkmark.png';
import IMGTwo from '../img/IMG_0499.JPG';
import IMGThree from '../img/IMG_0501.JPG';
import IMGFour from '../img/IMG_0500.JPG';
import IMGFive from '../img/IMG_0304.JPG';
import IMGSix from '../img/IMG_0473.JPG';
import IMGSeven from '../img/IMG_0272.JPG';
import IMGEight from '../img/IMG_0380.JPG';
import './Carousel.css';
import AppHeader from './AppHeader.js';

const Carousel = () => {

    const [isChecked, setIsChecked] = useState(false);

    const checkbox = isChecked ? checkmark : IMGOne;

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    }
    

return (
    <div>
        <AppHeader />
        <AliceCarousel autoPlay autoPlayInterval="3000" className="Carousel">
            <img src={checkbox} className="sliderimg" onMouseEnter={toggleCheck} onMouseLeave={toggleCheck}/>
            <img src={IMGTwo} className="sliderimg"/>
            <img src={IMGThree} className="sliderimg"/>
            <img src={IMGFour} className="sliderimg"/>
            <img src={IMGFive} className="sliderimg"/>
            <img src={IMGSix} className="sliderimg"/>
            <img src={IMGSeven} className="sliderimg"/>
            <img src={IMGEight} className="sliderimg"/>
        </AliceCarousel>
        <div className="Contact-Info">
            <h2>Contact Information</h2>
                <h3>(607)-423-8097</h3>
                <h3>scottebates@me.com</h3>
        </div>
        <br />
    </div>
    );
}

export default Carousel;