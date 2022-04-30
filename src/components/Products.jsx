import ProductCard from './ProductCard'
import classes from './Products.module.css'
import product1 from '../imgs/5SOS1.png'
import product2 from '../imgs/Adele1 .png'
import product3 from '../imgs/JIMIN1.png'
import product4 from '../imgs/titancolosaldiseño.png' 
import product5 from '../imgs/ASITWASINSTA.png'
import product6 from '../imgs/BADGAL HOODIE.png'
import product7 from '../imgs/MILEY 2 HOODIE.png'
import product8 from '../imgs/SUGA HOODIE.png'
import arrayImgs from '../data/data' 
import {NavLink} from 'react-router-dom'

function Product(){
    return (
        <section className={classes.productsection} id="products">
            <div className={classes.title}><h2>Products</h2></div>
            <div className={classes.grid}>
                {arrayImgs.map(obj => {
                    return (
                        <NavLink to={`/product-info/${obj.id}`}> 
                        <ProductCard key={obj.id} productimg={obj.img} id={obj.id} />
                        </NavLink>
                    )
                })}
                
                
            </div>
        </section>
    )
}

export default Product