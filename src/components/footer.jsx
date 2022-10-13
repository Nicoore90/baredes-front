import './footer.css'
import instagram from '../images/Trazado 3.png'
import twitter from '../images/Trazado 2.png'
import facebook from '../images/Trazado 1.png'

export function Footer() {
    return(
        <div className='footer'>
            <ul>
                <li>Footer Menu</li>
                <li>Footer Menu</li>
                <li>Footer Menu</li>
            </ul>
            <ul>
                <li>Footer Menu</li>
                <li>Footer Menu</li>
                <li>Footer Menu</li>
            </ul>
            <ul>
                <li>Footer Menu</li>
                <li>Footer Menu</li>
                <li>Footer Menu</li>
            </ul>

            <ul className='social__images'>
                <li><img src={instagram}/></li>
                <li><img src={twitter}/></li>
                <li><img src={facebook}/></li>
            </ul>
        </div>
    )
}