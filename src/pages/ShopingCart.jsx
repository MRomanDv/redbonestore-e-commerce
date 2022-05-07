import NavBar from '../components/NavBar'
import classes from './ShopingCart.module.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const ShopingCart = () => {
  return (
      <>
    <NavBar />
    <div className={classes.background}>
      <div className={classes.title}>
          <h1>Carrito de compras</h1>
          <AiOutlineShoppingCart className={classes.icon}></AiOutlineShoppingCart>
      </div>

     <div>
         
     </div>
    </div>
    </>
  )
}

export default ShopingCart
