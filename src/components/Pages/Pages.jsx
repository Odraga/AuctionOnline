import Home from "./Home/Home"
import Auction from "./Auction/Auction"
import OnSale from "./OnSale/OnSale"
import Auth from "./Auth/Auth"
import AboutUs from "./AboutUs/AboutUs"

import { useContext } from "react"
import { PageContext } from "../../context/PageContext"

export default function Pages() {

    const {namePage} = useContext(PageContext)

    switch(namePage){
        case "home":
            return <Home />
            break;
        case "auction":
            return <Auction />
            break;
        case "onsale":
            return <OnSale />
            break;
        case "auth":
            return <Auth />
            break;
        case "aboutus":
            return <AboutUs />
            break;
        default:
            return <div>
                <h1>Oops! A Error!</h1>
                <p>this page does not exist</p>
                </div>
             break;
    }
}