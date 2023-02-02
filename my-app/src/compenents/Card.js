
import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import apiData from '../Products.json';

const Card = () => {
const[products] = useState(apiData)
console.log(products)
    return (
       <div className='Gallery'>
     {products.map((product) => {
        console.log(product)
        return(
         <div key={product.id} className='Card'>
      <Link to={`/FicheLogement/${product.id}`} key={product.id}>
        <img className='Card-img' src={product.cover} alt=''></img> 
        <h2 className='Card-titre'>{product.title}</h2>
       </Link>
       </div>
     )
   }) }
      </div>
    )
 }


export default Card;