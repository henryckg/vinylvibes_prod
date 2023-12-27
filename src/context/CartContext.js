import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const cartLS = JSON.parse(localStorage.getItem("cart")) || []

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(cartLS)
    const [stockLimit, setStockLimit] = useState("")

    const addToCart = (product, qty) =>{
        const itemAdded = {...product, quantity: qty}
        const secondCart = [...cart]
        const itemInCart = secondCart.find((prod) => prod.id === itemAdded.id)
        
        if (itemInCart) {
            if (itemInCart.quantity + qty <= itemInCart.stock) { //Se valida si hay stock suficiente para seguir agregando al carrito.
                itemInCart.quantity += qty
                setStockLimit("")
            } else {
                setStockLimit("La cantidad supera el stock disponible. Intenta agregando menos unidades.")
            }
        } else {
            secondCart.push(itemAdded)
            setStockLimit("")
        }
        
        setCart(secondCart) 
    }

    const qtyInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    

    return (
        <CartContext.Provider value={{cart, setCart, addToCart, qtyInCart, totalPrice, clearCart, removeItem, stockLimit}}>
            {children}
        </CartContext.Provider>
    )
}   