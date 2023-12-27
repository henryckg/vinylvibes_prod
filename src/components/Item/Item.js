import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

export default function Item({product}) {
    return (
        <div className='item-card'>
            <div className='img-container'>
                <img className="item-product-img" width="250" src={product.img} alt={product.name}/>
            </div>
            <h3>{product.name}</h3>
            <p>Precio: USD ${product.price}</p>
            <p>Categoría: {product.category}</p>
            <Link className="link-ver-mas" to={`/item/${product.id}`}>Ver Más</Link>
        </div>
    )
}
