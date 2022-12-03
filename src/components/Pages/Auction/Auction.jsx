import { AuctionContextProvider } from "../../../context/AuctionContext"
import AuctionFilter from "./AuctionFilter/AuctionFilter"
import AuctionList from "./AuctionList/AuctionList"

function Auction() {
  return (
    <>
      <AuctionContextProvider>
        <AuctionFilter />
        <AuctionList />
      </AuctionContextProvider>
    </>
  )
}

export default Auction