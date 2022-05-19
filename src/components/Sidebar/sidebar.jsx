import yoga from '../../assets/yoga.svg'
import swim from '../../assets/swim.svg'
import bike from '../../assets/bike.svg'
import dumbbell from '../../assets/dumbbell.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const HeaderLeft = styled.menu`
    display: flex;
    flex-direction: column;
    height : 100%;
    align-items: center;
    width: 117px;
    margin: 0;
    padding: 0;
    position: fixed;
    overflow: auto;
    background-color: ${colors.Black};
`

const NavLeft = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height : 100%;
`

const NavActivity = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 64px;
    border-radius: 6px;
    margin-bottom: 20px;
    background-color: ${colors.White};
`

const Copiryght = styled.div`
    transform: rotate(-90deg);
    width: 138px;
    color: ${colors.White};
    font-size: 12px;
    margin-bottom: 200px;
`

function Sidebar(){
    return(
            <HeaderLeft>
                <NavLeft>
                    <NavActivity to='/'>
                        <img src= {yoga} alt='activity'/>
                    </NavActivity>
                    <NavActivity to='/'>
                        <img src={swim} alt='activity'/>
                    </NavActivity>
                    <NavActivity to='/'>
                        <img src={bike} alt='activity'/>
                    </NavActivity>
                    <NavActivity to='/'>
                        <img src={dumbbell} alt='activity'/>
                    </NavActivity>
                </NavLeft>
                <Copiryght>
                    <p>Copiryght, SportSee 2020</p>
                </Copiryght>
            </HeaderLeft>

    )
}

export default Sidebar