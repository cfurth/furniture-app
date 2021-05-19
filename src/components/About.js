import React from 'react';
import './About.css';
import AppHeader from './AppHeader.js';
import aboutPhoto from '../img/IMG_0620.jpg';

const About = () => {
    
return (
    <div>
        <AppHeader />
        <div className="About">
            <h2>About SB Classical Woodworking</h2>
            <p className="About-Text">
            Hi, my name is Scott Bates. I started my career as a cabinet and furniture maker when I was 
            20 years old. I completed a European “like” apprenticeship by the time I was 24. I’ve 
            had the privilege to work with and learn from whom I consider some of the finest 
            craftsman in the country, and because I had so many mentors, I’ve become well versed in 
            many styles of furniture. I spent a good many years working for folks in Manhattan, so 
            I’ve had the opportunity to make furniture for a number of celebrities and other prominent 
            people (Doctors, Lawyers, and even a Prince). I really love what I do, which enables me to 
            put my heart and soul into every piece that I make. Now fast-forward 42 years. I moved 
            to a small rural town in upstate NY about 15 years ago where I built a shop so I can 
            continue to do what I love. I specialize in custom furniture and built-ins. Let’s see if 
            you and I can come up a design for the piece of “Your” dreams. My work is predominantly 
            handmade so your patience is greatly appreciated.
            </p>
            <img src={aboutPhoto} alt="Scott Bates" className="About-Photo"/>
        </div>
    </div>
    );
}

export default About;