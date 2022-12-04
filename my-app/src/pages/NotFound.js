import React from 'react';
import images from '../compenents/Images/404.png';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='NotFound'>
            <div className='Error-img'>
            <img src={images} alt=''></img>
            </div>
                <p className='Error-p'>Oups! La page que vous demandez n'existe pas.</p>

                <Link className='Error-Link' to="/">
                Retourner sur la page d’accueil
             </Link>
        
        </div>
    );
};

export default NotFound;