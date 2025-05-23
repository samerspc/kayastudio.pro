import React, { useState, useEffect } from "react";
import "../styles/StickyMenu.css"; 

import sunL from "/sun.svg"
import moonL from "/moon.svg"
import sunD from "/sunD.svg"
import moonD from "/moonD.svg"

import mbl from "/mbl.svg"
import mbd from "/mbd.svg"

const StickyMenu = ({handleSetTheme, theme}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflowHidden");
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflowHidden");
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
    <div className={`menu ${visible ? "visible" : "hidden"}`}>
        <p id="logo" className={theme ? "logoL" : "logoD"}>kaya studio</p>
        <nav>
          {!isMobile && 
            <>
            <a href="#studio" className={theme ? "nav-item nav-itemL" : "nav-item nav-itemD"}>Студия</a>
            <a href="#clients" className={theme ? "nav-item nav-itemL" : "nav-item nav-itemD"}>Партнеры</a>
            <a href="#projects" className={theme ? "nav-item nav-itemL" : "nav-item nav-itemD"}>Проекты</a>
            <a href="#contacts" className={theme ? "nav-item nav-itemL" : "nav-item nav-itemD"}>Контакты</a>
            </>
          }
            
            <div className={`themeSetter ${theme ? 'nav-itemL themeSetterHoverL' : 'nav-itemD themeSetterHoverD'}`} onClick={handleSetTheme}>
                { theme ?
                    <>
                    {/* <img src={sunL} alt="" className="sun"/> */}
                    {/* <img src={moonL} alt="" className="moon"/> */}
                    <svg className="sun" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_781_40)">
                      <path d="M13.8109 4.93036C14.3383 4.93036 14.7562 4.50249 14.7562 3.98508V1.08956C14.7562 0.572147 14.3383 0.144287 13.8109 0.144287C13.2935 0.144287 12.8756 0.572147 12.8756 1.08956V3.98508C12.8756 4.50249 13.2935 4.93036 13.8109 4.93036ZM20.2089 7.59701C20.5771 7.95523 21.1741 7.96517 21.5522 7.59701L23.602 5.54726C23.9601 5.17911 23.9601 4.57214 23.602 4.20399C23.2338 3.84577 22.6368 3.84577 22.2687 4.20399L20.2089 6.26368C19.8507 6.63184 19.8507 7.22885 20.2089 7.59701ZM22.8557 13.9951C22.8557 14.5125 23.2836 14.9303 23.801 14.9303H26.6865C27.2039 14.9303 27.6318 14.5125 27.6318 13.9951C27.6318 13.4776 27.2039 13.0497 26.6865 13.0497H23.801C23.2836 13.0497 22.8557 13.4776 22.8557 13.9951ZM20.2089 20.393C19.8507 20.7612 19.8507 21.3582 20.2089 21.7263L22.2687 23.786C22.6368 24.1443 23.2338 24.1343 23.602 23.7761C23.9601 23.4079 23.9601 22.8209 23.602 22.4527L21.5423 20.393C21.1741 20.0348 20.5771 20.0348 20.2089 20.393ZM13.8109 23.0596C13.2935 23.0596 12.8756 23.4776 12.8756 23.995V26.8905C12.8756 27.4179 13.2935 27.8358 13.8109 27.8358C14.3383 27.8358 14.7562 27.4179 14.7562 26.8905V23.995C14.7562 23.4776 14.3383 23.0596 13.8109 23.0596ZM7.42288 20.393C7.05472 20.0348 6.44775 20.0348 6.0796 20.393L4.02985 22.4428C3.67164 22.8109 3.67164 23.398 4.01989 23.7662C4.38805 24.1244 4.98507 24.1343 5.35323 23.7761L7.41293 21.7263C7.77113 21.3582 7.77113 20.7612 7.42288 20.393ZM4.76616 13.9951C4.76616 13.4776 4.34826 13.0497 3.83085 13.0497H0.945272C0.42786 13.0497 0 13.4776 0 13.9951C0 14.5125 0.42786 14.9303 0.945272 14.9303H3.83085C4.34826 14.9303 4.76616 14.5125 4.76616 13.9951ZM7.41293 7.59701C7.77113 7.23881 7.77113 6.62189 7.42288 6.26368L5.36318 4.20399C5.00497 3.85573 4.40795 3.84577 4.03979 4.20399C3.68159 4.57214 3.68159 5.17911 4.02985 5.53732L6.0796 7.59701C6.44775 7.95523 7.04477 7.95523 7.41293 7.59701Z" fill="#292C32"/>
                      <path d="M13.8008 20.403C17.3033 20.403 20.2088 17.4975 20.2088 13.9951C20.2088 10.4826 17.3033 7.57715 13.8008 7.57715C10.2983 7.57715 7.40283 10.4826 7.40283 13.9951C7.40283 17.4975 10.2983 20.403 13.8008 20.403Z" fill="#292C32"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_781_40">
                      <rect width="28" height="27.7114" fill="white" transform="translate(0 0.144287)"/>
                      </clipPath>
                      </defs>
                    </svg>

                    <svg className="moon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="moonHoverL" d="M15.436 13.5466C10.0235 13.5466 6.48075 10.0589 6.48075 4.6386C6.48075 3.40529 6.73212 1.92061 7.10133 1.03295C7.18774 0.836564 7.20345 0.703021 7.20345 0.616611C7.20345 0.349526 7.00707 0.074585 6.65357 0.074585C6.5436 0.074585 6.3472 0.0981513 6.15868 0.168851C2.47447 1.66139 0 5.62839 0 9.82317C0 15.6441 4.46975 19.8939 10.2907 19.8939C14.564 19.8939 18.3739 17.2937 19.6229 14.0101C19.6936 13.8138 19.7094 13.6096 19.7094 13.5232C19.7094 13.1775 19.4344 12.9418 19.1516 12.9418C19.0416 12.9418 18.9474 12.9575 18.7824 13.0125C18.0047 13.2717 16.7243 13.5466 15.436 13.5466Z" fill="#292C32" fillOpacity="0.2"/>
                    </svg>
                    </>
                :
                    <>
                    {/* <img src={sunD} alt="" className="sun"/>
                    <img src={moonD} alt="" className="moon"/> */}

                    <svg className="sun" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="sunHoverD" d="M12.8244 4.57812C13.3142 4.57812 13.7022 4.18081 13.7022 3.70036V1.01166C13.7022 0.53121 13.3142 0.133911 12.8244 0.133911C12.344 0.133911 11.9559 0.53121 11.9559 1.01166V3.70036C11.9559 4.18081 12.344 4.57812 12.8244 4.57812ZM18.7655 7.0543C19.1073 7.38693 19.6616 7.39616 20.0127 7.0543L21.9161 5.15096C22.2487 4.8091 22.2487 4.24549 21.9161 3.90363C21.5742 3.571 21.0199 3.571 20.678 3.90363L18.7655 5.81621C18.4328 6.15807 18.4328 6.71243 18.7655 7.0543ZM21.2231 12.9953C21.2231 13.4758 21.6205 13.8638 22.1009 13.8638H24.7803C25.2608 13.8638 25.6581 13.4758 25.6581 12.9953C25.6581 12.5148 25.2608 12.1175 24.7803 12.1175H22.1009C21.6205 12.1175 21.2231 12.5148 21.2231 12.9953ZM18.7655 18.9363C18.4328 19.2782 18.4328 19.8325 18.7655 20.1744L20.678 22.087C21.0199 22.4196 21.5742 22.4103 21.9161 22.0778C22.2487 21.7358 22.2487 21.1908 21.9161 20.8489L20.0036 18.9363C19.6616 18.6037 19.1073 18.6037 18.7655 18.9363ZM12.8244 21.4125C12.344 21.4125 11.9559 21.8006 11.9559 22.281V24.9697C11.9559 25.4594 12.344 25.8474 12.8244 25.8474C13.3142 25.8474 13.7022 25.4594 13.7022 24.9697V22.281C13.7022 21.8006 13.3142 21.4125 12.8244 21.4125ZM6.89268 18.9363C6.55081 18.6037 5.9872 18.6037 5.64534 18.9363L3.742 20.8397C3.40938 21.1815 3.40938 21.7267 3.73276 22.0685C4.07462 22.4012 4.62899 22.4103 4.97086 22.0778L6.88343 20.1744C7.21605 19.8325 7.21605 19.2782 6.89268 18.9363ZM4.42572 12.9953C4.42572 12.5148 4.03767 12.1175 3.55721 12.1175H0.877753C0.397299 12.1175 0 12.5148 0 12.9953C0 13.4758 0.397299 13.8638 0.877753 13.8638H3.55721C4.03767 13.8638 4.42572 13.4758 4.42572 12.9953ZM6.88343 7.0543C7.21605 6.72168 7.21605 6.14883 6.89268 5.81621L4.98009 3.90363C4.64747 3.58025 4.0931 3.571 3.75124 3.90363C3.41862 4.24549 3.41862 4.8091 3.742 5.14172L5.64534 7.0543C5.9872 7.38693 6.54157 7.38693 6.88343 7.0543Z" fill="#FAFCFF" fillOpacity="0.2"/>
                      <path className="sunHoverD" d="M12.816 18.9455C16.0683 18.9455 18.7663 16.2475 18.7663 12.9953C18.7663 9.73372 16.0683 7.03577 12.816 7.03577C9.56368 7.03577 6.875 9.73372 6.875 12.9953C6.875 16.2475 9.56368 18.9455 12.816 18.9455Z" fill="#FAFCFF" fillOpacity="0.2"/>
                    </svg>

                    <svg className="moon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.436 13.5466C10.0235 13.5466 6.48075 10.0589 6.48075 4.6386C6.48075 3.40529 6.73212 1.92061 7.10133 1.03295C7.18774 0.836564 7.20345 0.703021 7.20345 0.616611C7.20345 0.349526 7.00707 0.074585 6.65357 0.074585C6.5436 0.074585 6.3472 0.0981513 6.15868 0.168851C2.47447 1.66139 0 5.62839 0 9.82317C0 15.6441 4.46975 19.8939 10.2907 19.8939C14.564 19.8939 18.3739 17.2937 19.6229 14.0101C19.6936 13.8138 19.7094 13.6096 19.7094 13.5232C19.7094 13.1775 19.4344 12.9418 19.1516 12.9418C19.0416 12.9418 18.9474 12.9575 18.7824 13.0125C18.0047 13.2717 16.7243 13.5466 15.436 13.5466Z" fill="#FAFCFF"/>
                    </svg>
                    </>
                }
            </div>
            { isMobile && 
                  <>
                  <div className={`mobileMenuOpen ${theme ? 'nav-itemL' : 'nav-itemD'}`} onClick={handleOpenModal}>
                    { theme ? 
                    <img src={mbl} alt="" />
                    :
                    <img src={mbd} alt="" />
                    }
                  </div>
                  </>
                }
        </nav>
    </div>
    {isModalOpen && 
      <div className={`modal-wrapper ${theme ? 'bgL' : 'bgD'}`}>
        <p id="logo1" className={theme ? "logoL" : "logoD"}>kaya studio</p>
        <div className={`CaseCard-modal-wrapper-close Fmodal ${theme ? 'CaseCard-modal-wrapper-closeL' : 'CaseCard-modal-wrapper-closeD'}`} onClick={handleCloseModal}>
                Закрыть
        </div>

        <div className={`modal-links`}>
          <a href="#clients" onClick={handleCloseModal} className={theme ? 'aL' : 'aD'}>Партнеры</a>
          <a href="#studio" onClick={handleCloseModal} className={theme ? 'aL' : 'aD'}>Студия</a>
          <a href="#projects" onClick={handleCloseModal} className={theme ? 'aL' : 'aD'}>Проекты</a>
          <a href="#contacts" onClick={handleCloseModal} className={theme ? 'aL' : 'aD'}>Контакты</a>
        </div>

      </div>
    }
    </>
  );
};

export default StickyMenu;
