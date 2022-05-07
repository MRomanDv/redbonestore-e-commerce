import classes from './footer.module.css'
import redbonelogo from '../../imgs/redbonelogo.png'
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerinfo}>
          <img src={redbonelogo} alt />
          <h4>redbonestore ®</h4>
      </div>
    </div>
  )
}

export default Footer
