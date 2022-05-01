import classes from '../registro/Registro.module.css' 


function Login(){
    return (
        <section className={classes.background}>
            <div className={classes.title}><h3 >Inicia sesión</h3></div>
            <div className={classes.container}>
                <div className={classes.inputbox}>
                    <input type="text" name="user" id="user" placeholder="Nombre de Usuario"  />
                </div>
                <div className={classes.inputbox}>
                    <input type="password" name="pass" id="pass" placeholder="password" />
                </div>
                <div className={classes.inputboxbtn}>
                    <input type="submit" value="Iniciar sesión" onClick={()=>{alert('Cuenta Creada con éxito!')}} />
                </div>

            </div>

        </section>
    )
}

export default Login