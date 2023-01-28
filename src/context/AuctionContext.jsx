import { listauction } from '../data/auctions'
import { listcategories } from '../data/categories'

import {createContext, useEffect, useState} from 'react'

export const AuctionContext = createContext()

export function AuctionContextProvider(props) {
    const [auctions, setAuctions] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setAuctions(listauction)
        setCategories(listcategories)
    }, []);

    
    
    function searchByCategories(categorie){
        if (categorie == "ALL"){
            setAuctions(listauction)
        }
        else{
            let filterAuctions = listauction.filter((auction) => categorie == auction.categorie)
            setAuctions(filterAuctions)
        }
    }

    function searchAuction(categorie, search){
        if(categorie == "DEFAULT" || categorie == "ALL" || categorie == ""){
            if(auctions.length == 0 && search == ""){
                setAuctions(listauction)
            }
            else{
                let filterAuctions = listauction.filter((auction) => auction.title.includes(search))
                setAuctions(filterAuctions)
            }
        }
        else{
            let filterAuctions = listauction.filter((auction) => categorie == auction.categorie && auction.title.includes(search))
            setAuctions(filterAuctions)
        }

    }

    function orderByPriceOrDate(nameOrder){
        if(nameOrder == "0"){
            setAuctions([...auctions].sort((price1, price2) => price2.starting_price - price1.starting_price))
        }
        else if (nameOrder == "1"){
            setAuctions([...auctions].sort((price1, price2) => price1.starting_price - price2.starting_price))
        }
        else{
            setAuctions(auctions)
        }
    }

    return (
        <AuctionContext.Provider value={{
            auctions,
            categories,
            searchAuction,
            searchByCategories,
            orderByPriceOrDate,
        }}>
            {props.children}
        </AuctionContext.Provider>
    )
}