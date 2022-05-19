import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const HeaderTop = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 91px;
    background-color: ${colors.Black};
`

const HeaderLogo = styled.img`
    padding-left: 28px
`

const NavTop = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 149px;
    padding-right: 87px;
`    

const H2 = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: #fff
`



function Header() {
    return (
        <header>
            <HeaderTop>
                <HeaderLogo src={logo}  alt="logo" />
                <NavTop>
                    <NavLink to='/'>
                        <H2>Accueil</H2>
                    </NavLink>
                    <NavLink to='/'>
                        <H2>Profil</H2>
                    </NavLink>
                    <NavLink to='/'>
                        <H2>Réglage</H2>
                    </NavLink>
                    <NavLink to='/'>
                        <H2>Communauté</H2>
                    </NavLink>
                </NavTop>
            </HeaderTop>
            
        </header>
    )
}

export default Header