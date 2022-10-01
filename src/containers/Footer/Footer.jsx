import React from "react";
import SubscribeTitle from './SubscribeTtitle/SubscribeTitle';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

import "./Footer.scss";


function Footer() {
  return <div className="app__footer">
    <div className="app__container">
      <SubscribeTitle/>
      <SubscribeForm/>

      <div className="app__footer-contacts text-center">
        <a className="app__footer-contacts_contact" href="#!">
          <FaFacebook fontSize={25}/>
        </a>
        <a className="app__footer-contacts_contact" href="#!">
          <FaTwitter fontSize={25}/>
        </a>
        <a className="app__footer-contacts_contact" href="#!">
          <FaInstagram fontSize={25}/>
        </a>
        <a className="app__footer-contacts_contact" href="#!">
          <FaLinkedin fontSize={25}/>
        </a>
      </div>

      <div className="dash" />

      <div className="app__footer-info">
      <p className="app__footer-info_leftText">
              Powered by 
              <a href="#!">Webflow</a>

      </p>
      <div className="app__footer-info_rightText">
        <a href="#!">Licenses</a>
        <a href="#!">Style Guide</a>
        <a href="#!">Instruction</a>
      </div>
    </div>
    </div>
  </div>;
}

export default Footer;
