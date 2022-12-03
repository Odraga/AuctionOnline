import { AuctionCard } from "./AuctionCard/AuctionCard"
import { AuctionContext } from "../../../../context/AuctionContext"
import {useContext} from "react"

import style from "./AuctionList.module.css"

function AuctionList() {

    const {auctions} = useContext(AuctionContext)
    
    if (auctions.length == 0){
        return( 
            <div>
                <h2>Auction not found.</h2>
            </div>
        )
    }

    return (
        <div className={style.auctionList__container}>
            {
                auctions.map((auction) => (
                    <div className={style.auction__card__item} key={auction.id}>
                        <AuctionCard auction_data={auction}/>
                    </div>
                ))
            }
        </div>
    )
}

export default AuctionList
