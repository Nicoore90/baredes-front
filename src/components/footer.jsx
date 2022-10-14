import './footer.css'
import instagram from '../images/Trazado 3.png'
import twitter from '../images/Trazado 2.png'
import facebook from '../images/facebook.png'
import mail from '../images/Mail.png'

export function Footer() {
    return(
        <div className='footer'>
            <ul>
                <li><img src={facebook} className='footer__thumbnail'/><p className='footer__text'>Baredes Baires</p></li>
                <li><img src={mail} className='footer__thumbnail'/><p className='footer__text'>baredesbaires@gmail.com</p></li>
                <li><p className='footer__text'>Razón social: <b><i>drynks S.A.</i></b></p></li>
                <li><p className='footer__text'>CUIT: 30639204754</p></li>
            </ul>
        </div>
    )
}