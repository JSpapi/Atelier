import React from 'react';
import { Heading } from '../../components';
import { data } from '../../constants';
import './OurServices.scss';

function OurServices() {
  return (
	 <div className='app__ourServices text-center' id='services'>
    <Heading heading="Our Services" subheading="Our Core Features"/>

    <div className="app__container">
      <div className="section__padding">
        <div className="app__ourServices-items">
          {
            data.services.map(({serviceImg, serviceTitle,}, index)=> (
              <div key={index} className="app__ourServices-item">
                <div className="app__ourServices-item_img">
                  <img src={serviceImg} alt="serviceTitle" />
                </div>

                <div className="app__ourServices-item_content">
                  <h3 className='ourServices-item_content-title'>{serviceTitle}</h3>
                  <h3 className='ourServices-item_content-subtitle'>Suspendisse varius enim in</h3>
                  <h3 className='ourServices-item_content-text'>cursus id rutrum imperdiet. eros elementum tristique.</h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    
   </div>
  )
}

export default OurServices;