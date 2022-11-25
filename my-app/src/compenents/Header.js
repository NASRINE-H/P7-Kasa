import React from 'react';
import images from './images/LOGO (1).png';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        
        <header className='Header'>
            {/* on a met {images} parceque on l' a  porté du coup le code va appliqué l'image choisi */ }
            <img src={images}  alt='kasa'/>
            <nav className='nav'>
             <Link className='nav_home' to="/">
                Accueil
             </Link>
             <Link className='nav_about' to="/About">
                A props
             </Link>
            </nav>
        </header>
    );
};

export default Header;




