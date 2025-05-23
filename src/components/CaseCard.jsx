import { useState } from 'react';

import ImageSlider from './ImageSlider';
import Footer from '../blocks/Footer';
import StickyMenu from './StickyMenu';

import '../styles/CaseCard.css';
import '../styles/CaseCardFocus.css'

function CaseCard({caseItem, theme}) {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const [open, setOpen] = useState(false);

    const handleModalOpen = () => {
        setOpen(true);
        document.body.classList.add("overflowHidden");
    }
    const handleModalClose = () => {
        setOpen(false);
        document.body.classList.remove("overflowHidden");
    }

    return (
        <>
        <div className={`CaseCard-wrapper ${theme ? 'CaseCard-wrapperHoverL' : 'CaseCard-wrapperHoverD'}`} onClick={() => handleModalOpen()}>
            <div className='CaseCard-imgLayer'>
                <img src={caseItem.img} alt="" />
            </div>
            <p className='CaseCard-name'>{caseItem.name}</p>
            <p className={`CaseCard-shortDescription ${theme ? 'CaseCard-srtDscpL' : 'CaseCard-srtDscpD'}`}>{caseItem.short}</p>
        </div>
        
        {!isMobile ? 
        <div className={`CaseCard-modal-layer ${open ? 'open' : ''}`} onClick={() => handleModalClose()}></div>
        :
        <div className={`CaseCard-modal-layer ${open ? 'open' : ''} ${theme ? 'bgL' : 'bgD'}`}>

            <p id="logo1" className={theme ? "logoL" : "logoD"}>kaya studio</p>
            <div className={`CaseCard-modal-wrapper-close Fmodal ${theme ? 'CaseCard-modal-wrapper-closeL' : 'CaseCard-modal-wrapper-closeD'}`} onClick={() => handleModalClose()}>
                    Закрыть
            </div>

            <div className={`CaseCard-modal-layer-mobile-info`}>
                <h1>{caseItem.name}</h1>
                <h2>{caseItem.long}</h2>
                <a href={`https://${caseItem.link}`} className={`${ theme ? 'CaseCard-modal-wrapper-info-aL' : 'CaseCard-modal-wrapper-info-aD'}`}>
                    {caseItem.link}
                </a>
                <div className='CaseCard-modal-layer-mobile-info-img'>
                    <img src={caseItem.img} alt="" />
                </div>
            </div>

            
        </div>
    }

        { !isMobile && 
        <div className={`CaseCard-modal-wrapper ${open ? 'open' : ''} ${theme ? 'bgL' : 'bgD'}`}>

            <div className={`CaseCard-modal-wrapper-close ${theme ? 'CaseCard-modal-wrapper-closeL' : 'CaseCard-modal-wrapper-closeD'}`} onClick={() => handleModalClose()}>
                Закрыть
            </div>
            
            <div className='CaseCard-modal-wrapper-info'>
                <h1>{caseItem.name}</h1>
                <h2>{caseItem.long}</h2>
                <a href={`https://${caseItem.link}`} className={`${ theme ? 'CaseCard-modal-wrapper-info-aL' : 'CaseCard-modal-wrapper-info-aD'}`}>
                    {caseItem.link}
                </a>
            </div>

            <img src={caseItem.img} className='caseImg' alt="" />
            <Footer theme={theme} caseFocus={true} />
        </div>
        }

        
        </>
    )
}

export default CaseCard
