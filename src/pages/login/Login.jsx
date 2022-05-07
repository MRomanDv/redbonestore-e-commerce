import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import classes from '../registro/Registro.module.css' 


function Login(){
    const [user , setUser] = useState()
    const [pass , setPassword] = useState()

    const navigate = useNavigate()

    const login = ()=>{
        axios.post('http://localhost:8000/login',{
            user:user,
            pass:pass
        }).then(()=>{
            navigate('/',{replace:true})
        })
    }
    
    return (
        <section className={classes.background}>
            <div className={classes.title}><h3 >Inicia sesión</h3></div>
            <div className={classes.container}>
                <div className={classes.inputbox}>
                    <input type="text" name="user" id="user" placeholder="Nombre de Usuario" onChange={(e)=>{setUser(e.target.value)}}  />
                </div>
                <div className={classes.inputbox}>
                    <input type="password" name="pass" id="pass" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                
                <div className={classes.inputboxbtn}>
                    <input type="submit" value="Iniciar sesión" onClick={login} />
                </div>

                <p style={{color: 'rgb(161, 42, 42)', marginTop: '1rem'}}>¿No recuerdas tu contraseña?</p>

            </div>

        </section>
    )
}

export default Login