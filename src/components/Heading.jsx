import '../styles/Heading.css';

function Heading({text, count, id, text_2, theme}) {

    const style = {

    }


    return (
        <>
        <div className='heading-wrapper' id={id}>
            <span id='heading-text' className={theme ? 'heading-textL' : 'heading-textD'}>{text}</span>
            <span id='heading-count' className={theme ? 'heading-countL' : 'heading-countD'}>
                <span className='geist'>{count}</span>
            </span>

            { text_2 ? 
                <>
                
                <p id='text2'>{text_2}</p>
                </>
                :
                ''
            }
        </div>
        </>
    )
}

export default Heading
