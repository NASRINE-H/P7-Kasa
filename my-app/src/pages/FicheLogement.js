import React from 'react';
import apiData from '../Products.json';
import SlideShow from '../compenents/Slideshow';
import { useParams } from "react-router-dom";
import LogeInfo from '../compenents/LogeInfo';
import Tags from '../compenents/Tags';
import Host from '../compenents/Host';
import Stars from '../compenents/Stars';
import Collapse from '../compenents/Collapse';

const FicheLogement = () => {
    const { id } = useParams();

    const lodgementId = apiData.find((item) => item.id === id);
    if (!lodgementId) {
      /**
       * je dois utiliser use Navigate c'est pas window
       */
        window.location.href = "/404";
      } else {
    return (
        <section>
            {lodgementId && (<div>
           <SlideShow key={lodgementId.id} pictures={lodgementId.pictures}/>
           <LogeInfo title={lodgementId.title} location={lodgementId.location}/>
           <div className="lineTag">
              <Tags tags={lodgementId.tags} />
            </div>

            <div className="hostRate">
              <Host name={lodgementId.host.name} picture={lodgementId.host.picture} />
              <Stars rating={lodgementId.rating} />
            </div>

            <div className='collapsLogment'>
            <div className="descriptionLog ">
                <Collapse
                  title="Description"
                  content={lodgementId.description}
                />
              </div>
              <div className="collapsEquipement">
              <Collapse
                  title="Équipements"
                 content={lodgementId.equipments.map((useEquip, i) => (
                    <div key={i}>{useEquip}</div>
                  ))}
                />

              </div>
            </div>
            
        </div>)}
        
        

        
      
        </section>
    );
 }
};

export default FicheLogement;