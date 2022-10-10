import './hero.css';
import arrow from '../images/arrow-down-short.svg';

export function Hero() {
    return(
        <div className="hero__background">
            <div className='hero__text__container'>
                <h1 className="hero__title">CONFIANZA / TRANSPARENCIA</h1>
                <p className="hero__text">Descubrí los mejores lugares a tu alrededor en el precio que querés.</p>
                <div className='hero__form'></div>
                <button className='hero__button'><p className='hero__button__text'>Buscar</p></button>
                <img className='arrow'src={arrow}></img>
            </div>
        </div>
    )
}