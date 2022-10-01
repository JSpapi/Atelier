import React from 'react';
import './TemplateItems.scss';
function TemplateItem({templateImg,  templateName}) {
  return (
    <div className="app__template-item">
    <div className="app__template-item_img">
      <img src={templateImg} alt="pages" />
    </div>

    <p className='app__template-item_name'>{templateName}</p>
  </div>
  )
}

export default TemplateItem;