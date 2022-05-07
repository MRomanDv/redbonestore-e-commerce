import classes from './slider.module.css'
import { BiLeftArrow , BiRightArrow } from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import arrayImgs from '../../data/data'


const Wrapper = styled.div`
    height : 100%;
    display : flex;
    transform : translateX(${props => props.slideIndex * -100}vw);
    transition: 500ms ease;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0) 
    const [newArray, setNewArray] = useState([])
    const slide = useRef()
    
    const slideMove = (direction)=>{
        if(direction == 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideIndex)
            
        }else {
            setSlideIndex(slideIndex < 2 ?  slideIndex + 1 : slideIndex )
        }
    }
    useEffect(()=>{
        //setNewArray(arrayImgs.slice(arrayImgs.length -3))
        setNewArray(arrayImgs.filter((el)=> el.tag === 'nuevo-lanzamiento'))
    },[])
    

  return (
    <div className={classes.container}>

        <div className={classes.arrowLeft} onClick={()=> slideMove('left')}>
            <BiLeftArrow></BiLeftArrow>
        </div>   

            <Wrapper slideIndex={slideIndex}>

               {newArray.map((el , i)=> { 
                   
                    return ( 
                        
                    <div ref={slide} className={classes.slide}>  
                    <div className={classes.imgcontainer}>
                       <img key={el.id} src={el.img} alt="" className={classes.img}/>
                       
                    </div>
                    <div className={classes.info}>
                        <h3>NUEVOS LANZAMIENTOS</h3> 
                        <p>Personaliza el diseño que tengas en mente</p>
                        <Link to={`/product-info/${el.id}`}>
                        <button>Ordenar modelo</button>
                        </Link>
                    </div>
                    </div>
                    )
               })}
            </Wrapper>  
            
        <div className={classes.arrowRight} onClick={()=> slideMove('right')}>
            <BiRightArrow></BiRightArrow>
        </div>
      
    </div>
  )
}

export default Slider
