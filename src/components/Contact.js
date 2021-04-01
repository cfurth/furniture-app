import React from 'react';
import './Contact.css';
import AppHeader from './AppHeader.js';

const Contact = () => {
    
return (
    <div>
        <AppHeader />
        <div className="Contact-Info">
            <h2>Contact Information</h2>
                <h3>(607)-423-8097</h3>
                <h3>scottebates@me.com</h3>
        </div>
    </div>
    );
}

export default Contact;