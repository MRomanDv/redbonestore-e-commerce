import classes from './Navbar.module.css'
import { AiFillShopping, AiOutlineUser , AiOutlineUserAdd } from 'react-icons/ai'
import {FaTshirt} from 'react-icons/fa'
import {HashLink as Link} from 'react-router-hash-link'

function NavBar(){
    return (
        <div className={classes.nav}>
            <ul>
                <div className={classes.links}>
                <Link to='#products' smooth><li>Products</li></Link>
                <FaTshirt className={classes.icon} />
                </div>
                <div className={classes.links}>
                <li>Log in</li>
                <AiOutlineUser className={classes.icon} />
                </div>
                <div className={classes.links}>
                <li>Register</li>
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