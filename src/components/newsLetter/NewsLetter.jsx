import classes from './newsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={classes.background}>
        <h2><span>News</span> Letter</h2>
      <h3>Suscribete a nuestro News Letter para recibir promociones y notificaciones antes que los demas</h3>
      <div className={classes.nlinput}>
      <input type="email" placeholder="inserta e-mail" className={classes.inputemail} />
      <input type="submit" />
      </div>
    </div>
  )
}

export default NewsLetter
