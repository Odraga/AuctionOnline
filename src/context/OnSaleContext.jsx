import { useState, useEffect } from "react"
import { createContext } from "react"
import { listcategories } from "../data/categories"
import { listonsale } from "../data/onsale"

export const OnSaleContext = createContext()

export function OnSaleContextProvider(props){

    const [onSales, setOnSale] = useState([])
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        setOnSale(listonsale)
        setCategories(listcategories)
    }, [])

    function searchOnSale(categorie, search){
        if(categorie == "DEFAULT" || categorie == "ALL" || categorie == ""){
            if(onSales.length == 0 && search == ""){
                setOnSale(listonsale)
            }
            else{
                let filterOnSales = listonsale.filter((onsale) => onsale.title.includes(search))
                setOnSale(filterOnSales)
            }
        }
        else{
            let filterOnSales = listonsale.filter((onsale) => categorie == onsale.categorie && onsale.title.includes(search))
            setOnSale(filterOnSales)
        }
    }

    function searchByCategories(categorie){
        if (categorie == "ALL"){
            setOnSale(listonsale)
        }
        else{
            let filterOnSales = listonsale.filter((onsale) => categorie == onsale.categorie)
            setOnSale(filterOnSales)
        }
    }

    function orderByPriceOrDate(nameOrder){
        if(nameOrder == "0"){
            setOnSale([...onSales].sort((price1, price2) => price2.price - price1.price))
        }
        else if (nameOrder == "1"){
            setOnSale([...onSales].sort((price1, price2) => price1.price - price2.price))
        }
        else{
            setOnSale(onSales)
        }
    }

    return(
        <OnSaleContext.Provider value={{
            onSales,
            categories,
            searchByCategories,
            searchOnSale,
            orderByPriceOrDate,
        }}>
            {props.children}
        </OnSaleContext.Provider>
    )
}