import React, { useContext, useState } from "react"
import { Context } from "./Context"
import CartItem from "./CartItem"

function Cart() {
    const { cartItems, cartPrice, emptyCart } = useContext(Context)
    const [btnText, setBtnText] = useState("Place Order")

    const cartElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
   
    function handleClick() {

        if (cartItems.length > 0) {
            setBtnText("Placing Order..")

            setTimeout(() =>
                ((
                    emptyCart()

                ))
                ,
                2000)

        }
    }

    return (
        <main className="cart-page">
            {cartElements}
                <p className="total-cost">Total: {cartPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })} </p>

                
               { cartItems.length > 0 ? 
                    <div className="order-button">
                    <button onClick={handleClick}> {btnText} </button> 
                    </div> :
                    <p>You have no items in your cart.</p>
                } 
            
        </main>
    )
}


export default Cart