import classes from './Navbar.module.css'
import { AiFillShopping, AiOutlineUser , AiOutlineUserAdd } from 'react-icons/ai'
import {FaTshirt} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function NavBar(){
    return (
        <div className={classes.nav}>
            <ul>
                <div className={classes.links}>
                <Link to='/'><li>Home</li></Link>
                <FaTshirt className={classes.icon} />
                </div>
                <div className={classes.links}>
                <Link to="/login"><li>Inicia sesión</li></Link>
                <AiOutlineUser className={classes.icon} />
                </div>
                <div className={classes.links}>
                <Link to="/registro"><li>Registrate</li></Link>
                <AiOutlineUserAdd className={classes.icon} />
                </div>
                <div className={classes.links}>
                <li>Shop Cart</li><AiFillShopping className={classes.icon} />
                </div>
            </ul>
        </div>
    )
}

export default NavBar