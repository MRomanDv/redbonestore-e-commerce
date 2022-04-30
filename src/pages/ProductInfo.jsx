import { useEffect, useState } from 'react'
import { AiFillPropertySafety } from 'react-icons/ai'
import NavBar from '../components/NavBar'
import classes from './ProductInfo.module.css'
import { useParams } from 'react-router-dom'
import arrayImgs from '../data/data'


function ProductInfo(){
    const [newImage, setNewImage] = useState()
    let params = useParams()

     function fetchImage(){
         arrayImgs.filter((imagen, i) => imagen.id == params.name && setNewImage(imagen.img))
     }

    useEffect(()=>{
        fetchImage()
    },[params.name])


    return (            
        <div className={classes.productinfo}>
        <NavBar />
            <div className={classes.title}><h2>Especificaciones de tu Orden</h2></div>
            <div className={classes.infocontainer}>

                <div className={classes.image}>
                    <img src={newImage} alt="" />
                </div>
                <div className={classes.info}>
                <form action="">
                        <div className={classes.inputbox}>
                            <p>Selecciona el Color de tu prenda</p>
                            <div className={classes.box}>                         
                            <input type="radio" id="blanco" name="color" value="blanco" />
                            <label htmlFor="blanco">Blanco</label>
                            </div>
                            <div className={classes.box}>
                            <input type="radio" id="negro" name="color" value="negro" />
                            <label htmlFor="negro">Negro</label>
                            </div>
                            
                        </div>

                        <div className={classes.inputbox}>
                            <p>Prenda</p>
                            <div className={classes.box}>
                            <input type="radio" id="t-shirt" name="prenda" value="t-shirt" />
                            <label htmlFor="t-shirt">T-shirt</label>
                            </div>
                            <div className={classes.box}>
                            <input type="radio" id="Hoodie" name="prenda" value="Hoodie" />
                            <label htmlFor="Hoodie">Hoodie (gorro y cangurera)</label> 
                            </div>
                            <div className={classes.box}>
                            <input type="radio" id="sudadera" name="prenda" value="sudadera" />
                            <label htmlFor="sudadera">Sudadera</label>
                            </div>
                        </div>

                        <div className={classes.inputbox}>
                        <p>Talla</p>
                        <div className={classes.box}>                         
                            <input type="radio" id="S" name="talla" value="S" />
                            <label htmlFor="S">S</label>
                        </div>
                        <div className={classes.box}>                         
                            <input type="radio" id="M" name="talla" value="M" />
                            <label htmlFor="M">M</label>
                        </div>
                        <div className={classes.box}>                         
                            <input type="radio" id="L" name="talla" value="XL" />
                            <label htmlFor="L">L</label>
                        </div>
                        <div className={classes.box}>                         
                            <input type="radio" id="XL" name="talla" value="XL" />
                            <label htmlFor="XL">XL</label>
                        </div>
                        </div>
    
                        </form>
                </div>
            </div>
        </div>      
    )
}

export default ProductInfo