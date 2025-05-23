import '../styles/ClientsList.css';

import c1L from '/c1L.svg'
import c2L from '/c2L.svg'
import c3L from '/c3L.svg'
import c1D from '/c1D.svg'
import c2D from '/c2D.svg'
import c3D from '/c3D.svg'




function ClientsList({theme}) {

    return (
        <>
            <div className='clientsList-wrapper'>

            {theme ?
            <>
            <img src={c1L} alt="" />
            <img src={c2L} alt="" />
            <img src={c3L} alt="" />
            <img src={c1L} alt="" />
            <img src={c2L} alt="" />
            <img src={c3L} alt="" />
            <img src={c1L} alt="" />
            <img src={c2L} alt="" />
            <img src={c3L} alt="" />
            </> 
                :
            <>
            <img src={c1D} alt="" />
            <img src={c2D} alt="" />
            <img src={c3D} alt="" />
            <img src={c1D} alt="" />
            <img src={c2D} alt="" />
            <img src={c3D} alt="" />
            <img src={c1D} alt="" />
            <img src={c2D} alt="" />
            <img src={c3D} alt="" />
            </>
            }
            

            </div>
        </>
    )
}

export default ClientsList
