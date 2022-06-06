import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='headerTop'>
                <img className='headerTop__logo' src={logo}  alt="logo" />
                <nav className='headerTop__nav'>
                    <NavLink className='headerTop__nav__link' to='/'>
                        Accueil
                    </NavLink>
                    <NavLink className='headerTop__nav__link' to='/'>
                        Profil
                    </NavLink>
                    <NavLink className='headerTop__nav__link' to='/'>
                        Réglage
                    </NavLink>
                    <NavLink className='headerTop__nav__link' to='/'>
                        Communauté
                    </NavLink>
                </nav>
            
        </header>
    )
}

export default Header