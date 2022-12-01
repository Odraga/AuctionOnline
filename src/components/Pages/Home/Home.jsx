import martilloHome from '../../../assets/martillo-home.jpg'
import auctionHome from '../../../assets/auction-home.png'
import onSaleHome from '../../../assets/onsale-home.png'

import { useContext } from 'react'
import { PageContext } from '../../../context/PageContext'

import style from './Home.module.css'

function Home() {

  const {updatePage} = useContext(PageContext)

  const handleSubmit = (e, name) => {
    e.preventDefault()
    updatePage(name)
  }

  return (
    <div className={style.home}>
      <div className={style.home__presentation}>
        <div className={style.home__presentation__container__information}>
          <div className={style.home__presentation__information}>
            <h1><i>¡Ya sea que venda o compre, la subasta es toda suya!</i> </h1>
            <p>
              Todo a su mano con tan solo un click ¡que espera! ¡que empiece la subasta!
            </p>
          </div>
        </div>

        <div className={style.home__presentation__image}>
          <img src={martilloHome} alt="Fondo de Martillo de subastas" title="Martillo de subastas"/>
        </div>
        
      </div>
      
      <div className={style.home__function}>
        <h2><i>¿Que puedes encontrar en nuestra web?</i> </h2>
        <div className={style.home__function__auction}>
          <div className={style.home__function__auction__image}>
            <img src={auctionHome} alt="Picture Auction Online" title="Picture Auction Online" width={100}/>
          </div>
          <div className={style.home__function__auction__information}>
            <h3><i>Auction Online</i></h3>
            <p>
              Aqui podras hacer pujas por objetos de cualquier calibre, sea una pintura muy vieja, hasta una moderna.
            </p>
            <br />
            <button onClick={(e) => handleSubmit(e, 'auction')}>
              View Auction
            </button>
          </div>
          <br />
          <hr />
        </div>
        
        <div className={style.home__function__onsale}>
          <div className={style.home__function__onsale__image}>
            <img src={onSaleHome} alt="Picture On Sale" title="Picture On Sale" width={100}/>
          </div>
          <div className={style.home__function__onsale__information}>
            <h3><i>On Sale</i></h3>
            <p>
              Aqui podras encontrar objetos interesantes en venta con un precio fijo, en este no se hacen pujas.
            </p>
            <br />
            <button onClick={(e) => handleSubmit(e, 'onsale')}>
              View On Sale
            </button>
          </div>
          <br />
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Home