import '../styles/CaseList.css';

import CaseCard from '../components/CaseCard';

function CaseList({cases, theme}) {

    return (
        <>
            <div className='caseList-wrapper'>
                {
                    cases.map((item, index) => (
                        <CaseCard caseItem={item} key={index} theme={theme}/>
                    ))
                }
            </div>
        </>
    )
}

export default CaseList
