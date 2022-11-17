import React from 'react';
import images from './images/LOGO (1).png'

const Header = () => {
    return (
        <header className='Header'>
            <nav>
                 <img src={images}  alt='kasa'/>
            </nav>
        </header>
    );
};

export default Header;