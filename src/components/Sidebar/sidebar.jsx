import yoga from '../../assets/yoga.svg'
import swim from '../../assets/swim.svg'
import bike from '../../assets/bike.svg'
import dumbbell from '../../assets/dumbbell.svg'
import { NavLink } from 'react-router-dom'

function Sidebar(){
    return(
            <header className='headerLeft'>
                <nav className='headerLeft__navLeft'>
                    <NavLink className='headerLeft__navLeft__activity' to='/'>
                        <img src= {yoga} alt='activity'/>
                    </NavLink>
                    <NavLink className='headerLeft__navLeft__activity' to='/'>
                        <img src={swim} alt='activity'/>
                    </NavLink>
                    <NavLink className='headerLeft__navLeft__activity' to='/'>
                        <img src={bike} alt='activity'/>
                    </NavLink>
                    <NavLink className='headerLeft__navLeft__activity' to='/'>
                        <img src={dumbbell} alt='activity'/>
                    </NavLink>
                </nav>
                <span className='headerLeft__copiryght'>
                    Copiryght, SportSee 2020
                </span>
            </header>

    )
}

export default Sidebar