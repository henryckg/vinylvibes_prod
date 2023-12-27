import "./ItemListContainer.css"
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import SpinnerComponent from "../Spinner/Spinner"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

export default function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        let itemsCollection
        if (categoryId){
            itemsCollection = query(collection(db, "products"), where("category", "==", categoryId))
            setTitle("")
        } else {
            itemsCollection = collection(db, "products")
            setTitle("Todos los Productos")
        }

        getDocs(itemsCollection)
            .then((res) => {
                if (res.size === 0){
                    setProducts(false)
                } else {
                    let items = res.docs.map((elm) => ({ id: elm.id, ...elm.data() }))
                    setProducts(items)
                }
            })
            .catch(error => {
                setProducts(error)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [categoryId])


    return (
        <div className="main-container">
            <h2 style={{ fontWeight: "bold", color: "black" }}>{greeting}</h2>
            {loading ? <SpinnerComponent /> : (
                products ? <ItemList products={products} title={title} /> : (
                    <div className="container-detail">
                            <h1>Error 404: Not Found</h1>
                            <Link to="/">Volver a la tienda</Link>
                    </div>
                )
            )}
        </div>
    )
}
