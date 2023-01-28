import { useState, useContext } from "react"
import { OnSaleContext } from "../../../../context/OnSaleContext"

import style from "./OnSaleFilter.module.css"

function OnSaleFilter() {

    const [categorie, setCategorie] = useState("")
    const {categories, searchByCategories, searchOnSale, orderByPriceOrDate} = useContext(OnSaleContext)
    const [searchItem, setSearchItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        searchOnSale(categorie, searchItem)
    }

    return (
        <>
            <div className={style.search__container}>
                <input id="searchItem" type="search" placeholder="Search On Sale by Title" onChange={(e) => setSearchItem(e.target.value)}/>
                <button onClick={(e) => handleSubmit(e)}>Search</button>
            </div>
            <div className={style.filter__container}>      
                <span>Categories </span>    
                <div className={style.categories__container}>
                    <select id="categories" name="categories" defaultValue={'DEFAULT'}  onChange={(e) => {
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
                    <select name="order" id="order" defaultValue={'DEFAULT'} onChange={(e) => {
                        orderByPriceOrDate(e.currentTarget.value)
                    }}>
                        <option id="none" value="DEFAULT" disabled>Select Order On Sale</option>
                        <option id="none "value="REGULAR">Regular Order</option>
                        <option value="0">Largest to Smallest On Sale</option>
                        <option value="1">Smallest to Largest On Sale</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default OnSaleFilter