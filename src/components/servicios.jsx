import './servicios.css'
import propietario from '../images/Propietario.png';
import alianzas from '../images/logo alianzas 1.png';
import referidos from '../images/referidos logo 1.png'

export function Servicios() {
    return(
        <div className='servicios'>
            <h2 className='servicios__title'>¿Como te podemos ayudar?</h2>
            <div className='servicios__list'>
                <div>
                    <h3 className='servicios__list__title'>PROPIETARIO</h3>
                    <img className='servicios__list__image' src={propietario} alt="" />
                    <p className='servicios__list__subtitle'>Comprar tu casa nunca fue tan facil</p>
                    <p className='servicios__list__text'>Elige entre miles de propiedades con fotografias profesionales, tours
                        virtuales y la ayuda de nuestros expertos.
                    </p>
                    <button className='servicios__list__button'><p className='servicios__list__button__text'>Ver propiedades</p></button>
                </div>
                <div>
                    <h3 className='servicios__list__title'>ALIANZAS</h3>
                    <img className='servicios__list__image' src={alianzas} alt="" />
                    <p className='servicios__list__subtitle'>Vende tu casa sin complicaciones</p>
                    <p className='servicios__list__text'>Nos encargamos de todo, desde ayudarte a definir el precio de tu inmueble
                        hasta encontrar al comprador ideal.
                    </p>
                    <button className='servicios__list__button'><p className='servicios__list__button__text'>Vender mi casa</p></button>
                </div>
                <div>
                    <h3 className='servicios__list__title'>REFERIDOS</h3>
                    <img className='servicios__list__image' src={referidos} alt="" />
                    <p className='servicios__list__subtitle'>Financiamiento a tu alcance</p>
                    <p className='servicios__list__text'>Te asesoramos para que obtengas la mejor opcion de
                        credito hipotecario de forma rapida y segura
                    </p>
                    <button className='servicios__list__button'><p className='servicios__list__button__text'>Comenzar pre-aprobacion</p></button>

                </div>
            </div>
        </div>
    )
}