import style from './NavBar.module.css'
import { useContext} from 'react'
import {PageContext} from '../../../context/PageContext'

export function NavBar() {
  const {updatePage} = useContext(PageContext)

  const handleSubmit = (e, name) => {
    e.preventDefault()
    updatePage(name)
  }

  return (
    <nav className={style.navBar}>
      <ul className={style.navBar__ul}>
        <li className={style.navbar__ul__li}>
          <a className={style.navBar__ul__li__a} href='home' onClick={(e) => handleSubmit(e, 'home')}>Home</a>
        </li>
        <li className={style.navbar__ul__li}>
          <a className={style.navBar__ul__li__a} href='auction' onClick={(e) => handleSubmit(e, 'auction')}>Auction</a>
        </li>
        <li className={style.navbar__ul__li}>
          <a className={style.navBar__ul__li__a} href='on_sale' onClick={(e) => handleSubmit(e, 'onsale')}>On Sale</a>
        </li>
        <li className={style.navbar__ul__li}>
          <a className={style.navBar__ul__li__a} href='auth' onClick={(e) => handleSubmit(e, 'auth')}>Sign up / Sign in</a>
        </li>
        <li className={style.navbar__ul__li}>
          <a className={style.navBar__ul__li__a} href='about_us' onClick={(e) => handleSubmit(e, 'aboutus')}>About us</a>
        </li>
      </ul>
    </nav>
  )
}