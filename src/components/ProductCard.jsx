import classes from './ProductCard.module.css'

 

function ProductCard(props){
    return (
        
        <div className={classes.card}>
            <img src={props.productimg} alt="" />
            <p>Ordenar</p>
        </div>
        
    )
}

export default ProductCard