import { Link } from "react-router-dom"
import icon from "./assets/cart.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartWidget.css"

export default function CartWidget() {

    const {qtyInCart} = useContext(CartContext)

    return (
        <div style={{marginRight: "1rem"}}>
            <Link to='/cart' className="cart-widget">
                <img src={icon} width="30" height="30" alt="cart icon" className="icon"/>
                <span style={{color: "#eaead1", fontSize: "1rem "}}>{qtyInCart()}</span>
            </Link>
        </div>
    )
}
