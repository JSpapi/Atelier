import React from 'react';
import './Heading.scss';
function Heading({heading, subheading}) {
  return (
	 <div className='app__main-heading'>
    <h3 className='app__subheading'>{subheading}</h3>
    <h2 className='app__heading'>{heading}</h2>
   </div>
  )
}

export default Heading;