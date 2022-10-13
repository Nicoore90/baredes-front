import './header.css'
import logo from '../images/logo.png'

export function Header() {
    return(
        <nav className='navbar'>
            <img src={logo} alt="" className='logo'/>
            <button className='login'><p>Login</p></button>
        </nav>
    )
}