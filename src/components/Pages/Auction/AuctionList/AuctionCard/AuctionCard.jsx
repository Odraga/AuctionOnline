import style from "./AuctionCard.module.css"

export function AuctionCard({auction_data}) {
  return (
    <>
        <div>
            <h3>{auction_data.title}</h3>
        </div>
        <div className={style.image__container}>
            <img src={auction_data.image_url} alt={auction_data.title}/>
        </div>
        <h2>Starting Price: {auction_data.starting_price}$</h2>
        <br />
        <hr />
        <span> <i> End of auction: {auction_data.enf_of_auction}</i></span>
        <hr />
        <br />
        <div>
            <div>
                <button className={style.button_bidup} onClick={() => {
                    alert(auction_data.id)
                }}>
                    Bid up
                </button>
            </div>
        </div>
    </>
  )
}
