import classes from './Registro.module.css'


function Registro(){
    return (
        <section className={classes.background}>
            <div className={classes.title}><h3 >Crear Cuenta</h3></div>
            <div className={classes.container}>
                <div className={classes.inputbox}>
                    <input type="text" name="firstname" id="firstname" placeholder="Nombre" />
                </div>
                <div className={classes.inputbox}>
                    <input type="text" name="lastname" id="lastname" placeholder="Apellido" />
                </div>
                <div className={classes.inputbox}>
                    <input type="email" name="email" id="email" placeholder="email"  />
                </div>
                <div className={classes.inputbox}>
                    <input type="text" name="user" id="user" placeholder="Nombre de Usuario"  />
                </div>
                <div className={classes.inputbox}>
                    <input type="password" name="pass" id="pass" placeholder="password" />
                </div>
                <div className={classes.inputboxbtn}>
                    <input type="submit" value="Crear cuenta" onClick={()=>{alert('Cuenta Creada con éxito!')}} />
                </div>

            </div>

        </section>
    )
}

export default Registro