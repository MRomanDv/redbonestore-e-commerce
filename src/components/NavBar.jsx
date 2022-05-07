import classes from './Navbar.module.css'
import { AiOutlineShoppingCart, AiOutlineUser , AiOutlineUserAdd } from 'react-icons/ai'
import {FaTshirt, FaSearch} from 'react-icons/fa'
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
                <Link to="/carrito"><li>carrito de compras</li></Link>
                <AiOutlineShoppingCart className={classes.icon}></AiOutlineShoppingCart>
                <p>5</p>
                </div>
                <div className={classes.searchbar}>
                    <input type="text" name="searchbar" id="searchbar" placeholder="search" />
                    <FaSearch className={classes.searchicon}></FaSearch>
                </div>
            </ul>
        </div>
    )
}

export default NavBar