import React from 'react';
import ImageEtoile from '../compenents/Images/Etoile.png';
import ImageEtoileVide from '../compenents/Images/EtoileVide.png';

const Stars = ({ rating }) => {
    // on créé un tableau;
    const array = [1, 2, 3, 4, 5];
  
    return (
      <div className="Etoiles">
        {/*arrayStar est un élèment qui parcourit le tableau, s'il est égal ou inf de rating il montre "empty" sinon "star"*/}
        {array.map((arrayStar, key) =>
          arrayStar >= rating ? (
            <img key={key} src={ImageEtoileVide} alt="étoile vide" />
          ) : (
            <img key={key} src={ImageEtoile} alt="étoile pleine" />
          )
        )}
      </div>
    );
  };
  
export default Stars;