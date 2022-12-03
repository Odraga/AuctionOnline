import { AuctionContext } from "../../../../context/AuctionContext"
import {useContext, useState} from "react"

import style from "./AuctionFilter.module.css"

function AuctionFilter() {

  const {categories, searchAuction, searchByCategories} = useContext(AuctionContext)

  const [categorie, setCategorie] = useState("")
  const [searchItem, setSearchItem] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    searchAuction(categorie, searchItem)
  }
  

  return (
    <>

      <div className={style.search__container}>
        <input id="searchItem" type="search" placeholder="Search Auction" onChange={(e) => setSearchItem(e.target.value)}/>
        <button onClick={(e) => handleSubmit(e)}>Search</button>
      </div>
      <div className={style.filter__container}>      
        <span>Categories </span>    
        <div className={style.categories__container}>
          
          <select id="categories" name="categories" defaultValue={'DEFAULT'} onChange={(e) => {
              setCategorie(e.currentTarget.value)
              searchByCategories(e.currentTarget.value)
            }}>
            <option id="none" value="DEFAULT" disabled>Select Categorie</option>
            <option id="none" value="ALL">All</option>
            {
              categories.map((categorie) => 
                <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
              )
            }
          </select>

        </div>
        <span> Order by </span>
        <div className={style.order__auction__container}>
            <select name="" id="" defaultValue={'DEFAULT'}>
                <option value="DEFAULT">Select Order Auction</option>
                <option value="">Mayor a menor oferta</option>
                <option value="">Menor a mayor oferta</option>
                <option value="">Mayor a Menor tiempo restante</option>
                <option value="">Menor a Mayor tiempo restante</option>  
            </select>
        </div>
      </div>
      
    </>
  )
}

export default AuctionFilter


