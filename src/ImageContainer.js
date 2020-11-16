import React, { useState, useContext } from "react"
import { Context } from "./Context"

import PropTypes from "prop-types"


function ImageContainer({ img, src, className }) {
  const [isHovering, setIsHovering] = useState(false)

  const { cartItems, toggleFavorite, addCartItems, removeCartItem } = useContext(Context)

  const heartIcon = img.isFavorite ? <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i> :
    isHovering && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>

  const inCart = cartItems.some(item => item.id === img.id) // tried using .find() but .some() makes more sense

  const cartIcon = inCart ? <i onClick={() => removeCartItem(img.id)} className="ri-shopping-cart-fill cart"></i> :
    isHovering && <i onClick={() => addCartItems(img)} className="ri-add-circle-line cart"></i>


  return (
    <div onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`${className} image-container`}>

      <img src={src} alt="" className="image-grid" />
      {heartIcon}
      {cartIcon}

    </div>
  )
}
ImageContainer.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default ImageContainer

