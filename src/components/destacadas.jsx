import './destacadas.css'
import house from '../images/image 8.png'

export function Destacadas() {
    return(
        <div>
            <h2 className='destacadas__title'>Propiedades Destacadas</h2>
            <p className='destacadas__text'>Descubri las propiedades mas populares de la semana</p>
            <div className='destacadas__list'>
                <div className='destacadas__list__item'>
                    <img className='destacadas__list__image' src={house}/>
                    <h3 className='destacadas__list__title'>Residencia</h3>
                    <p className='destacadas__list__text'>Alvear 1800, Vicente Lopez, GBA Norte, Provincia de Buenos Aires</p>
                    <p className='destacadas__list__price'>USD 500</p>
                </div>
                <div className='destacadas__list__item'>
                    <img className='destacadas__list__image' src={house}/>
                    <h3 className='destacadas__list__title'>Residencia</h3>
                    <p className='destacadas__list__text'>Alvear 1800, Vicente Lopez, GBA Norte, Provincia de Buenos Aires</p>
                    <p className='destacadas__list__price'>USD 500</p>
                </div>
                <div className='destacadas__list__item'>
                    <img className='destacadas__list__image' src={house}/>
                    <h3 className='destacadas__list__title'>Residencia</h3>
                    <p className='destacadas__list__text'>Alvear 1800, Vicente Lopez, GBA Norte, Provincia de Buenos Aires</p>
                    <p className='destacadas__list__price'>USD 500</p>
                </div>
                <div className='destacadas__list__item'>
                    <img className='destacadas__list__image' src={house}/>
                    <h3 className='destacadas__list__title'>Residencia</h3>
                    <p className='destacadas__list__text'>Alvear 1800, Vicente Lopez, GBA Norte, Provincia de Buenos Aires</p>
                    <p className='destacadas__list__price'>USD 500</p>
                </div>
            </div>
        </div>
    )
}