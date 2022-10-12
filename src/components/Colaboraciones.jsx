import './Colaboraciones.css'
import file from '../images/File.png'

export function Colaboraciones() {
    return(
        <>
            <h2 className='Colaboraciones__title'>Colaboraciones & Alianzas</h2>
            <div className='colaboraciones__container'>
                <div>
                    <img src={file} alt="" className='colaboraciones__image'/>
                    <p className='colaboraciones__aliado'>Aliado</p>
                </div>
                <div>
                    <img src={file} alt="" className='colaboraciones__image'/>
                    <p className='colaboraciones__aliado'>Aliado</p>
                </div>
                <div>
                    <img src={file} alt="" className='colaboraciones__image'/>
                    <p className='colaboraciones__aliado'>Aliado</p>
                </div>
                <div>
                    <img src={file} alt="" className='colaboraciones__image'/>
                    <p className='colaboraciones__aliado'>Aliado</p>
                </div>
                <div>
                    <img src={file} alt="" className='colaboraciones__image'/>
                    <p className='colaboraciones__aliado'>Aliado</p>
                </div>
            </div>
        </>
    )
}