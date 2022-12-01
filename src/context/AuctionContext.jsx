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
        let filterAuctions = listauction.filter((auction) => categorie == auction.categorie)
        setAuctions(filterAuctions)
    }

    function searchAuction(categorie, search){
        if(categorie == "DEFAULT" || categorie == ""){
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

    /*function searchAuction(categorie, search){
        if(categorie == "DEFAULT" || categorie == ""){
            if(auctions.length == 0 && search == ""){
                setAuctions(listauction)
            }
            else{
                let filterAuctions = listauction.filter((auction) => auction.title.includes(search))
                
                setAuctions(filterAuctions)
            }
        }
        else{
            if(search == ""){
                let filterAuctions = listauction.filter((auction) => categorie == auction.categorie)
                setAuctions(filterAuctions)
            }
            else{
                let filterAuctions = listauction.filter((auction) => categorie == auction.categorie && auction.title.includes(search))
                setAuctions(filterAuctions)
            }
            
        }

    }*/

    return (
        <AuctionContext.Provider value={{
            auctions,
            categories,
            searchAuction,
            searchByCategories,
        }}>
            {props.children}
        </AuctionContext.Provider>
    )
}