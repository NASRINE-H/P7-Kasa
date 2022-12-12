import React from 'react';
import { useState } from 'react';
import FlecheDroite from '../components/Images/FlecheDroite';
import FlecheGauche from '../components/Images/FlecheGauche';

const Slideshow = ({ images }) => {
   const [ current, setCurrent] = useState(0)
   const length = images.length;

   const next = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1)
   };

   const previous = () =>{
   setCurrent(current === 0 ? length - 1 : current -1)
   }

    return (
        <section className='sectionSlide'>
        <div className='slider'>
           <img  src={images} alt=''></img> 
        </div>
        </section>

    );
};

export default Slideshow;
