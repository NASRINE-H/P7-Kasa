import React from 'react';
import images from './Images/LOGO (1).png';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        
        <header className='Header'>
            {/* on a met {images} parceque on l' a  porté du coup le code va appliqué l'image choisi */ }
           <div className='Logo'><img src={images}  alt='kasa'/></div> 
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




