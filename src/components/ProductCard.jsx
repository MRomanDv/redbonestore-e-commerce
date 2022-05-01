import classes from './ProductCard.module.css'

 

function ProductCard(props){
    return (
        
        <div className={classes.card}>
            <img src={props.productimg} alt="" />
            <h3>{props.producto}</h3>
            <p>Ordenar</p>
        </div>
        
    )
}

export default ProductCard