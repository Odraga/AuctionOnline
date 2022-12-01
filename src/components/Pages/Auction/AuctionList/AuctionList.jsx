import { AuctionCard } from "./AuctionCard/AuctionCard"
import { AuctionContext } from "../../../../context/AuctionContext"
import {useContext} from "react"

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
        <div>
            {
                auctions.map((auction) => (
                    <div key={auction.id}>
                        <AuctionCard auction_data={auction}/>
                    </div>
                ))
            }
        </div>
    )
}

export default AuctionList
