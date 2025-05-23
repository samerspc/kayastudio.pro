import React, { useState, useEffect } from "react";

import '../styles/Title.css';

import up from '/upL.svg'
import upW from '/upW.svg'

function Title({theme}) {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className='title-wrapper' id='up'>
        {!isMobile && 
          <div className='titile-name'>
              <p>
                <span className={`${theme ? 'titile-nameL1' : 'titile-nameD1'}`}>kaya </span> 
                <span className={`${theme ? 'titile-nameL2' : 'titile-nameD2'}`}>studio</span>
              </p>
          </div>
        }
        <div className='titile-text'>
            <p id='titile-text_1'>
            Разрабатываем сайты {!isMobile && <br />} и делаем красивый дизайн
            </p>
            <p id='titile-text_2'>
            Мы – молодая команда, которая помогает развивать бизнес через дизайн и разработку высокого уровня
            </p>
            <a id='titile-text_3' href="mailto:info@kayastudio.pro" className={`${theme ? 'titile-text_3L' : 'titile-text_3D'}`}>info@kayastudio.pro</a>
        </div>

        {isMobile && 
        <>
        <div className={`titile-mobile-buttons`}>
            <div className={`titile-mobile-button1 ${theme ? 'nav-itemL' : 'nav-itemD'}`} onClick={() => scrollToSection('studio')}>
              {theme ? 
              <a><img src={up} alt=""/></a>
              :
              <a><img src={upW} alt=""/></a>
            }
            </div>
            <div className={`titile-mobile-button2 ${theme ? 'nav-itemL' : 'nav-itemD'}`} onClick={() => scrollToSection('contacts')}>
                <a className={theme ? 'aL' : 'aD'}>Связаться с нами</a>
            </div>
        </div>
        </>
        }
      </div>
      <div id="next"></div>
    </>
  )
}

export default Title
