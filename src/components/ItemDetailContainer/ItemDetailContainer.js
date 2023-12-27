import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Link, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import SpinnerComponent from "../Spinner/Spinner"

export default function ItemDetailContainer() {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "products", id)
        getDoc(docRef)
            .then((res) => {
                if (res.exists()){
                    let item = { id: res.id, ...res.data()}
                    setProduct(item)
                } else {
                    setProduct(false)
                }
            })
            .catch((error) => {
                console.log(error) 
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])
    
    return (
        <div style={{backgroundColor:"#eaead1"}}>
            {
                loading ? <SpinnerComponent /> : (
                    product ? <ItemDetail product={product}/> : (
                        <div className="container-detail">
                            <h3>Ups! Hay un error. El producto no existe ☹</h3>
                            <Link to="/">Volver a la tienda</Link>
                        </div>
                    )
                )
            }
        </div>
    )
}
