import {OnSaleContextProvider } from "../../../context/OnSaleContext"
import OnSaleFilter from "./OnSaleFilter/OnSaleFilter"
import OnSaleList from "./OnSaleList/OnSaleList"

function OnSale() {



  return (
    <>
      <OnSaleContextProvider>
        <OnSaleFilter/>
        <OnSaleList/>
      </OnSaleContextProvider>
    </>
  )
}

export default OnSale