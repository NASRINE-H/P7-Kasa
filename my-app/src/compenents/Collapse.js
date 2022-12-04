import React, { useState } from 'react';
import imageIcon from '../compenents/Images/CollapseClose.png';

const Collapse = ({ title, content }) => {
    const [Open, setOpen] = useState(false)

    return Open ? (
        <div className='section-collap'>
          <div className='title-icon'> 
           <div className='Collap-title'> {title}</div>
           <img src={imageIcon} alt='' className='Collap-iconOpen'onClick={() => setOpen(false)}></img>
           </div>
           <div className='cadre-content'>
              <div className='Collap-content'>{content}</div>
           </div>
        </div>
    ) : (
        <div className='section-collap'>
            <div className='title-icon'>
            <div className='Collap-title'>{title}</div>
               <img src={imageIcon} alt='' className='Collap-icon' onClick={() => setOpen(true)} ></img>
            </div>
            
        </div>
    )

};

export default Collapse;