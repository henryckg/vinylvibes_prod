import Item from "../Item/Item";
import "./ItemList.css"

export default function ItemList({products, title}) {
    return (
        <div className="list-container">
            <h2>{title}</h2>
            <div className="products">
                {products.map((prod) => <Item key={prod.id} product={prod}/>)}
            </div>
        </div>
    )
}
