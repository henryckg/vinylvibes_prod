import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import "./Checkout.css"
import SpinnerComponent from '../Spinner/Spinner'

export default function Checkout() {

    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false)
    const [required, setRequired] = useState(false)
    const [emailConfirmed, setEmailConfirmed] = useState(false)


    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        email: "",
        emailConfirm: "",
        phone: "",
    })

    const handleSubmit = (e) => {

        e.preventDefault()

        if (!buyer.name || !buyer.surname || !buyer.email || !buyer.emailConfirm || !buyer.phone) {
            setRequired(true)
            setEmailConfirmed(false)
        } else {
            if (buyer.email !== buyer.emailConfirm) {
                setRequired(false)
                setEmailConfirmed(true)
            } else {
                setLoading(true)
                setEmailConfirmed(false)

                const items = cart.map((el) => {
                    return {
                        id: el.id,
                        name: el.name,
                        price: el.price,
                        quantity: el.quantity
                    }
                })

                const order = {
                    buyer,
                    products: items,
                    total: totalPrice(),
                    date: new Date()
                }

                const orderRef = collection(db, "orders")
                addDoc(orderRef, order)
                    .then((doc) => {
                        setOrderId(doc.id)
                        setLoading(false)
                        clearCart()
                    })
            }
        }
    }

    const handleOrder = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    if (loading) {
        return (
            <div className='container-detail preparing-order'>
                <h3 className='text-preparing'>Se está generando su orden</h3>
                <SpinnerComponent />
            </div>
        )
    }

    if (orderId) {
        return (
            <div className='container-detail order-completed'>
                <h3>¡Compra finalizada satisfactoriamente!</h3>
                <p>El id de su pedido es: {orderId}</p>
            </div>
        )
    }

    return (
        <div className="container-detail">
            <h2>Checkout</h2>
            {required && <p style={{textAlign:'center', marginTop:'2rem'}}>Por favor, complete todos los campos.</p>}
            {emailConfirmed && <p style={{textAlign:'center', marginTop:'2rem'}}>Ambos correos no coinciden.</p>}
            <div className='form-container'>
                <h3>Ingresa tus datos:</h3>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='name' placeholder='Nombre' value={buyer.name} onChange={handleOrder} />
                    <input type='text' name='surname' placeholder='Apellido' value={buyer.surname} onChange={handleOrder} />
                    <input type='email' name='email' placeholder='E-mail' value={buyer.email} onChange={handleOrder} />
                    <input type='email' name='emailConfirm' placeholder='Confirmar e-mail' value={buyer.emailConfirm} onChange={handleOrder} />
                    <input type='text' name='phone' placeholder='Teléfono' value={buyer.phone} onChange={handleOrder} />
                    <button type='submit' className='btn-submit'>Finalizar Compra</button>
                </form>
            </div>
        </div>
    )
}
