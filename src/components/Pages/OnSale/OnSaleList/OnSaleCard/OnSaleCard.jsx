import style from "./OnSaleCard.module.css"

export function OnSaleCard({onSale_data}) {
  return (
    <>
        <div>
            <h3>{onSale_data.title}</h3>
        </div>
        <div className={style.image__container}>
            <img src={onSale_data.image_url} alt={onSale_data.title}/>
        </div>
        <h2>Starting Price: {onSale_data.price}$</h2>
        <br />
        <hr />
        <span> <i> Init of On Sale: {onSale_data.init_of_onsale} </i></span>
        <hr />
        <br />
        <div>
            <div>
                <button className={style.button_buy} onClick={() => {
                    alert(onSale_data.id)
                }}>
                    Buy
                </button>
            </div>
        </div>
    </>
  )
}
