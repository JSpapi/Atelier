import React, { useState } from 'react';
import {VscMenu, VscClose} from 'react-icons/vsc';
import './navbar.scss';
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
	 <div className='app__container'>
      <div className="app__navbar">
        <div className="app__navbar-nav">

          <div className="app__navbar-logo">
            <a href='#!'>Atelier.</a>
          </div>

          <ul className="app__navbar-list">
            <li className="app__navbar-list_item">
              <a href="#header">Overview</a>
            </li>
            <li className="app__navbar-list_item">
              <a href="#template">Pages</a>
            </li>
            <li className="app__navbar-list_item">
              <a href="#services">Portfolio</a>
            </li>
            <li className="app__navbar-list_item">
              <a href="#!">Template</a>
            </li>
            <li className="app__navbar-list_item">
              <a href="#footer">Contact</a>
            </li>
          </ul>

        </div>

        <div className="app__navbar-button">
          <button type='button'>Buy Template</button>
        </div>

        {/* CODES FOR SMALL SCREEN */}
        <div className="app__navbar-smallscreen">
          <VscMenu color='#FFAE2B' fontSize={27}  onClick={() => setToggleMenu(true)}/>

          {
            toggleMenu && (
              <div className='app__navbar-smallscreen_overlay slide-bottom'>

                <VscClose className='close__overlay'  onClick={() => setToggleMenu(false)} />

                <ul  className="app__navbar-smallscreen_list">
                  <li onClick={() => setToggleMenu(false)} className="app__navbar-list_item">
                    <a href="#header">Overview</a>
                  </li>
                  <li onClick={() => setToggleMenu(false)} className="app__navbar-list_item">
                    <a href="#template">Pages</a>
                  </li>
                  <li onClick={() => setToggleMenu(false)} className="app__navbar-list_item">
                    <a href="#services">Portfolio</a>
                  </li>
                  <li onClick={() => setToggleMenu(false)} className="app__navbar-list_item">
                    <a href="#!">Template</a>
                  </li>
                  <li onClick={() => setToggleMenu(false)} className="app__navbar-list_item">
                    <a href="#footer">Contact</a>
                  </li>
                </ul>
              </div>
            )
          }
        </div>

      </div>
   </div>
  )
}

export default Navbar