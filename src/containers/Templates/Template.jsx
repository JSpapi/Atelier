import React from 'react';
import { Heading, TemplateItem } from '../../components';
import {data} from '../../constants'
import './Template.scss';
function Template() {

  return (
    <div className="app__template text-center" id='template'>
      <Heading heading="Template Pages" subheading="Our Core Layouts"/>
      <div className='app__container'>
        <div className='section__padding'>
          <div className="app__template-items">
            {
              data.templates.map(({index, templateImg, templateName,}) => (
                <TemplateItem 
                  key={templateName + index}
                  templateName={templateName}
                  templateImg={templateImg}
                />
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Template;