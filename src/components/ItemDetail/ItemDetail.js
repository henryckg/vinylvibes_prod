import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function ItemDetail({ product }) {

    const [qtyAdded, setQtyAdded] = useState(0)
    const { addToCart, stockLimit } = useContext(CartContext)
    
    const handleOnAdd = (qty) => {
        setQtyAdded(qty)

        addToCart(product, qty)

    }


    return (
        <div className="container-detail">
            <div className="product-detail-container">
                <h2 className="product-title">{product.name}</h2>
                <img className="product-img" src={product.img} alt={product.name} />
                <div className="product-details">
                    {
                        qtyAdded > 0 ? (
                            <>
                                <p style={{fontSize: "1.5rem"}}>
                                    {
                                        stockLimit ? stockLimit : "¡Producto agregado al carrito!"
                                    }
                                </p>
                                <div className="btn-container">
                                    <Link to='/cart' className="btn-finalizar">Finalizar Compra</Link>
                                    <Link to='/' className="btn-continuar">Seguir Comprando</Link>
                                </div>
                            </>
                            
                        ) : (
                            <>
                                <p className="product-price">USD ${product.price}</p>
                                <p className="product-stock">Stock disponible: {product.stock}</p>
                                <ItemCount stock={product.stock} onAdd={handleOnAdd}/>
                            </>
                        )
                    }
                    <p>Categoría: {product.category}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}
