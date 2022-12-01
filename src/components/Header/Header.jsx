import { NavBar } from './NavBar/NavBar'
import style from './Header.module.css'

function Header() {
  return (
    <header className={style.Header}>
      <div className={style.brand}>
        <a href="home">Auction Online</a>
      </div>
      <NavBar />
    </header>
  )
}

export default Header