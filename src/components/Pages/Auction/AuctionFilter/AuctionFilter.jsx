import { AuctionContext } from "../../../../context/AuctionContext"

import {useContext, useState} from "react"

function AuctionFilter() {

  const {categories, searchAuction, searchByCategories} = useContext(AuctionContext)

  const [categorie, setCategorie] = useState("")
  const [searchItem, setSearchItem] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    searchAuction(categorie, searchItem)
  }
  

  return (
    <div>
        <span>Filter </span>
        <select id="categories" name="categories" defaultValue={'DEFAULT'} onChange={(e) => {
            setCategorie(e.target.value)
            searchByCategories(e.target.value)
          }}>
          <option id="none" value="DEFAULT" disabled>Select Categorie</option>
          {
            categories.map((categorie) => 
              <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
            )
          }
        </select>
        <input id="searchItem" type="search" placeholder="Search Auction" onChange={(e) => setSearchItem(e.target.value)}/>

        <button onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  )
}

export default AuctionFilter


