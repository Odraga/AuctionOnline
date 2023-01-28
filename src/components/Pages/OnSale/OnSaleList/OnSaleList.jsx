import { useContext } from "react"
import { OnSaleContext } from "../../../../context/OnSaleContext"
import { OnSaleCard } from "./OnSaleCard/OnSaleCard"

import style from "./OnSaleList.module.css"

function OnSaleList() {
  const {onSales} = useContext(OnSaleContext)
    
    if (onSales.length == 0){
        return( 
            <div className={style.onsalelist__container}>
                <h2>On Sale not found.</h2>
            </div>
        )
    }

    return (
        <div className={style.onsalelist__container}>
            {
                onSales.map((onSale) => (
                    <div className={style.onsale__card__item} key={onSale.id}>
                        <OnSaleCard onSale_data={onSale} />
                    </div>
                ))
            }
        </div>
    )
}

export default OnSaleList