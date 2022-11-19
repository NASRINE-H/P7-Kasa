import React from 'react';
import images from './images/LogoFooter.png'
const Footer = () => {
    return (
        <footer className='Footer'>
            <img className='FooterLogo' src={images} alt='logo KASA'></img>
            <p className='FooterText'> © 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;