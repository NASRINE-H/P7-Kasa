import React from 'react';
import apiData from '../Products.json';
import SlideShow from '../compenents/Slideshow';
import { useParams } from "react-router-dom";
import LogeInfo from '../compenents/LogeInfo';
import Tags from '../compenents/Tags';

const FicheLogement = () => {
    const { id } = useParams();

    const lodgementId = apiData.find((item) => item.id === id);
    return (
        <section>
            {lodgementId && (<div>
           <SlideShow key={lodgementId.id} pictures={lodgementId.pictures}/>
           <LogeInfo title={lodgementId.title} location={lodgementId.location}/>
           <div className="lineTag">
              <Tags tags={lodgementId.tags} />
            </div>
            
        </div>)}
        
        

        
      
        </section>
    );
};

export default FicheLogement;