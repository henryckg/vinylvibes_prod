import { useContext } from "react"
import "./Cart.css"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export default function Cart() {

    const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext)

    return (
        <div className="container-detail">
            <h2>Carro de Compras</h2>
            {
                cart.map((prod) => (
                    <div key={prod.id} className="products-container">
                        <div className="product-in-cart">
                            <div>
                                <img src={prod.img} alt={prod.name} className="imagen-producto-carrito"/>
                            </div>
                            <h4>{prod.name}</h4>
                            <p>Precio unitario: USD ${prod.price}</p>
                            <p>Cantidad: {prod.quantity}</p>
                            <p>Precio Total: USD ${prod.quantity * prod.price}</p>
                            <button className="eliminar-item" onClick={()=>removeItem(prod.id)}>X</button>
                        </div>
                    </div>
                ))
            }
            {
                cart.length > 0 ?
                <div className="cart-details">
                    <h4>Total a pagar: USD ${totalPrice()}</h4>
                    <div className="cart-buttons">
                        <button onClick={()=>clearCart()} className="btn-vaciar">Vaciar Carro</button>
                        <Link to="/checkout" className="btn-link">Comprar</Link>
                    </div>
                </div>
                :
                <div className="empty-cart">
                    <h3>No hay productos en el carro</h3>
                    <Link to='/' className="btn-link">Ir a la Tienda</Link>
                </div>
            }
            
        </div>
    )
}
