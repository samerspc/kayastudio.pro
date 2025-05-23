import '../styles/Footer.css';

import arrow from '/arrow.svg'
import arrowW from '/arrowW.svg'
import up from '/upL.svg'
import upW from '/upW.svg'

function Footer({theme, caseFocus}) {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
        <div className='footer-wrapper' id='contacts'>
            {caseFocus ? 
            <p className='footer-title'>Понравился проект<span className='geist'>?</span></p>
            :
            <p className='footer-title'>Понравились наши проекты<span className='geist'>?</span></p>
            }
            <div className='footer-form-wrapper'>
                <img src={theme ? arrow : arrowW} alt="" />
                <p className='footer-form-bigTitle'>Давайте поговорим <span className='geist'>{`:)`}</span></p>
                <p className='footer-form-miniTitle'>Свяжитесь с нами</p>
                <div className='footer-form'>
                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                    <div className='footer-form-info'>
                        <span className={`footer-form-info-1 ${theme ? 'footer-form-info-1L' : 'footer-form-info-1D'}`}>ПОЧТА</span>
                        <a href="mailto:info@kayastudio.pro" className={`footer-form-info-2 ${theme ? 'footer-form-info-2L' : 'footer-form-info-2D'}`}>info@kayastudio.pro</a>
                    </div>
                    
                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                    <div className='footer-form-info'>
                        <span className={`footer-form-info-1 ${theme ? 'footer-form-info-1L' : 'footer-form-info-1D'}`}>ТЕЛЕГРАМ</span>
                        <a href='https://t.me/kayastudio' className={`footer-form-info-2 ${theme ? 'footer-form-info-2L' : 'footer-form-info-2D'}`}>@kayastudio</a>
                    </div>

                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                    <div className='footer-form-info'>
                        <span className={`footer-form-info-1 ${theme ? 'footer-form-info-1L' : 'footer-form-info-1D'}`}>ЛОКАЦИЯ</span>
                        <span className={`footer-form-info-2 ${theme ? 'footer-form-info-2LR' : 'footer-form-info-2DR'}`} >Россия</span>
                    </div>

                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                </div>
            </div>

            <div className={`footer-down ${caseFocus && 'caseFocusFooter'}`}>

                <p><span className='geist'>©2025</span> kaya laboratories</p>
                
                {!caseFocus && 
                <a onClick={() => scrollToSection('up')}>
                    <div className={`buttonUp ${ theme ? 'buttonUpLB' : 'buttonUpDB'}`}>
                        <img src={theme ? up : upW} alt="" />
                    </div>
                </a>
                }
                
            </div>

        </div>
    </>
  )
}

export default Footer
