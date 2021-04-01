import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import IMGOne from '../img/IMG1_Kitchen.JPG';
import IMGTwo from '../img/IMG_0499.JPG';
import IMGThree from '../img/IMG_0501.JPG';
import IMGFour from '../img/IMG_0500.JPG';
import IMGFive from '../img/IMG_0304.JPG';
import IMGSix from '../img/IMG_0473.JPG';
import IMGSeven from '../img/IMG_0272.JPG';
import IMGEight from '../img/IMG_0273.JPG';
import IMGNine from '../img/IMG_0380.JPG';
import './Carousel.css';
import AppHeader from './AppHeader.js';

const Carousel = () => {
    
return (
    <div>
        <AppHeader />
        <AliceCarousel autoPlay autoPlayInterval="3000" className="Carousel">
            <div className="container">
                <img src={IMGOne} className="sliderimg" alt="kitchen"/>
                <div className="middle">
                    <div className="text">"Sapele" Outdoor Kitchen</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGTwo} className="sliderimg"/>
                <div className="middle">
                    <div className="text">A Shaker inspired nightstand in cherry with hand cut dovetails in a solid maple drawer</div>
                </div>
            </div>
            <img src={IMGThree} className="sliderimg"/>
            <img src={IMGFour} className="sliderimg"/>
            <img src={IMGFive} className="sliderimg"/>
            <img src={IMGSix} className="sliderimg"/>
            <img src={IMGSeven} className="sliderimg"/>
            <img src={IMGEight} className="sliderimg"/>
            <img src={IMGNine} className="sliderimg"/>
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