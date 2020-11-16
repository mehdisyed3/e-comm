import React, { useContext, useState } from 'react'
import { Context } from './Context'

function CartItem({ item }) {
  const { removeCartItem } = useContext(Context)
  const [hover, setHover] = useState(false)

  const price = item.price.toLocaleString("en-US", { style: "currency", currency: "USD" })

  const binIcon = hover ? 'fill' : "line"


  return (
    <div className="cart-item">

      <i
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => removeCartItem(item.id)} className={`ri-delete-bin-${binIcon}`}>
      </i>

      <img src={item.url} alt='' width="130px" />
      <p>{price}</p>
    </div>
  )

}

export default CartItem