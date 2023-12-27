import { useState } from "react"
import "./ItemCount.css"

export default function ItemCount({stock, onAdd}) {

    const [count, setCount] = useState(1)

    const increment = () => {
        count < stock && setCount(count+1)
    }

    const decrement = () => {    
        count > 1 && setCount(count-1)
    }   

    return (
        <div className="item-count">
            <div className="count-container">
                <button className="count-btn" onClick={decrement}>-</button>
                <p className="count">{count}</p>
                <button className="count-btn" onClick={increment}>+</button>
            </div>
            <button className="agregar-carro" onClick={()=> onAdd(count)} disabled={!stock}>Agregar al Carro</button>
        </div>
    )
}
