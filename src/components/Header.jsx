import classes from './header.module.css'
import logo from '../imgs/redbonelogo.png'
import NavBar from './NavBar'

function Header(){
    return (
        <section className={classes.header}>
            <NavBar />
            <img src={logo} alt="" />
            <h2>We design and print your dream T shirt </h2>
        </section>
    )
}

export default Header