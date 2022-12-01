export function AuctionCard({auction_data}) {
  return (
    <div>
        
        <div>
            <img src={auction_data.image_url} alt="" width={100}/>
        </div>
        <br />
        <span>ID: {auction_data.id} || <b>Starting Price: {auction_data.starting_price}$</b></span>
        <br />
        <div>
            <h2>{auction_data.title}</h2>
            <p>{auction_data.description}</p>
            <span><b>Enf of auction: {auction_data.enf_of_auction}</b></span>
            <div>
                <button>
                    Bid up
                </button>
            </div>
        </div>
        <br />
        <hr />
        <br />
    </div>
  )
}
