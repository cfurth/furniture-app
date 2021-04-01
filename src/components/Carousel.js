import React from 'react';
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
import IMGNine from '../img/IMG_0274.jpg';
import IMGTen from '../img/IMG_0380.JPG';
import IMGEleven from '../img/IMG_0004.jpg';
import IMGTwelve from '../img/IMG_0009.JPG';
import IMGThirteen from '../img/IMG_0022.jpg';
import IMGFourteen from '../img/IMG_0020.jpg';
import IMGFifteen from '../img/IMG_0018.jpg';
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
                    <div className="text">My take on a Shaker nightstand in cherry with hand cut dovetails in a solid maple drawer with a turned walnut drawer pull</div>
                </div>
            </div>
            <div className="container">
            <img src={IMGThree} className="sliderimg"/>
            <div className="middle">
                    <div className="text">My take on a Shaker nightstand in cherry with hand cut dovetails in a solid maple drawer with a turned walnut drawer pull</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGFour} className="sliderimg"/>
                <div className="middle">
                    <div className="text">My take on a Shaker nightstand in cherry with hand cut dovetails in a solid maple drawer with a turned walnut drawer pull</div>
                </div>
            </div>
            <div className="container">
            <img src={IMGFive} className="sliderimg"/>
            <div className="middle">
                    <div className="text">A jewelers bench with turned feet in the Shaker style out of cherry and maple</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGSix} className="sliderimg"/>
                <div className="middle">
                    <div className="text">Another jewelers bench of my design in red oak </div>
                </div>
            </div>
            <div className="container">
                <img src={IMGSeven} className="sliderimg"/>
                <div className="middle">
                    <div className="text">A bar made in sapele with a granite veneer</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGEight} className="sliderimg"/>
                <div className="middle">
                    <div className="text">A bar made in sapele with a granite veneer</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGNine} className="sliderimg"/>
                <div className="middle">
                    <div className="text">The back of the bar</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGTen} className="sliderimg"/>
                <div className="middle">
                    <div className="text">A shuffleboard table in sapele and maple</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGEleven} className="sliderimg"/>
                <div className="middle">
                    <div className="text">Sapele wall unit</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGTwelve} className="sliderimg"/>
                <div className="middle">
                    <div className="text">Sapele wall unit</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGThirteen} className="sliderimg"/>
                <div className="middle">
                    <div className="text">Another jewelers bench out of cherry with walnut inlays and dovetailed walnut feet</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGFourteen} className="sliderimg"/>
                <div className="middle">
                    <div className="text">Another jewelers bench out of cherry with walnut inlays and dovetailed walnut feet</div>
                </div>
            </div>
            <div className="container">
                <img src={IMGFifteen} className="sliderimg"/>
                <div className="middle">
                    <div className="text">Another jewelers bench out of cherry with walnut inlays and dovetailed walnut feet</div>
                </div>
            </div>
        </AliceCarousel>
        <br />
    </div>
    );
}

export default Carousel;