import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Registro.module.css'
import axios from 'axios'


function Registro(){
    const [firstName, setFisrstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const registerClient = ()=>{
        axios.post('http://localhost:8000/registro' , {
            firstname: firstName,
            lastname: lastName,
            email:email,
            user:userName,
            pass:password
        }).then(()=>{
            navigate('/login', {replace:true})
        })
    }

    return (
        <section className={classes.background}>
            <div className={classes.title}><h3 >Crear Cuenta</h3></div>
            <div className={classes.container}>
                <div className={classes.inputbox}>
                    <input type="text" name="firstname" id="firstname" placeholder="Nombre" onChange={(e)=>{setFisrstName(e.target.value)}} />
                </div>
                <div className={classes.inputbox}>
                    <input type="text" name="lastname" id="lastname" placeholder="Apellido" onChange={(e)=>{setLastName(e.target.value)}} />
                </div>
                <div className={classes.inputbox}>
                    <input type="email" name="email" id="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}  />
                </div>
                <div className={classes.inputbox}>
                    <input type="text" name="user" id="user" placeholder="Nombre de Usuario" onChange={(e)=>{setUserName(e.target.value)}}  />
                </div>
                <div className={classes.inputbox}>
                    <input type="password" name="pass" id="pass" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div className={classes.inputboxbtn}>
                    <input type="submit" value="Crear cuenta" onClick={registerClient} />
                </div>

            </div>

        </section>
    )
}

export default Registro