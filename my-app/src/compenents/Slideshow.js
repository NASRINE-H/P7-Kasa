import React, {useState} from "react";
import { useParams } from "react-router-dom";
import apiData from '../Products.json';
import ImageLeft from '../compenents/Images/VectorLeft.svg';
import ImageRight from '../compenents/Images/VectorRight.svg'
 function SlideShow() {
    const { id } = useParams();
    const foundProduct = apiData.find((product) => product.id === id);
    const pictures = foundProduct.pictures;
  
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
      };
      const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
      };
      return (
        <div className="slider">
          {/* Showing slider navigation buttons */}
          
          
          <button className="vectorLeft">
            <img src={ImageLeft} onClick={prevSlide} alt="fleche" />
          </button>
          <button className="vectorRight">
            <img src={ImageRight} onClick={nextSlide} alt="fleche" />
          </button>
          
          {/* Images */}
          {pictures.map((img, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <img
                    src={img}
                    alt="Photos du logement"
                    className="slider-image"
                  />
                )}
                {index === current && (
                  <strong className="image-number">
                    {current + 1}/{pictures.length}
                  </strong>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    export default SlideShow;