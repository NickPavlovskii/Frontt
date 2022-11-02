import {BsBag} from 'react-icons/bs';
import { BiUser} from 'react-icons/bi';
import css from './Header.module.css';


export const Header = () => {

  return (
 
    <section className={css.header}>
    <a href=""><img src="./logo2.png" alt="logo" className={css.logo} ></img></a>
    <ul className={css.navbar} media="screen">
        <li><a href="/" className={css.active}>Home</a></li>
        <li><a href="shop.html" className={css.Shop}>Shop</a></li>
        <li><a href="blog.html" className={css.Blog}>Blog</a></li>
        
        <li><a href="/About" className={css.About }to="/About"  >About</a></li>
        <li><a href="contact.html" className={css.Contact}>Contact</a></li>
        
            <div>  <li><a href="" className={css.caart}> <BsBag/></a> <sup className={css.sbag} ><div className={css.bag}> </div></sup></li>
            
            </div>
          <li><a href="contact.html" className={css.link}><BiUser/></a></li>
      
          
    </ul>

</section>
  )
}
export default Header;