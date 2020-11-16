import React, { useState, useEffect } from "react"

const Context = React.createContext()

function Provider(props) {
  const [allPics, setPics] = useState([])
  const [cartItems, setCartItems] = useState([])


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mehdisyed3/pics/master/images")
      .then(res => res.json())
      .then(data => setPics(data))
  }, [])

  function calcTotal() {
    const total = cartItems.reduce((acc, cv) => acc + cv.price, 0)
    return total
  }

  const cartPrice = cartItems ? calcTotal() : 0

  function addCartItems(img) {

    setCartItems([...cartItems, img])

  }

  function emptyCart(){
    setCartItems([])
  }

  function removeCartItem(id) {
    const updated = cartItems.filter(item => item.id !== id)

    setCartItems(updated)
  }


  function toggleFavorite(id) {
    const updated = allPics.map(item => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite }
      }
      return item
    })
    setPics(updated)
  }

  // console.log(cartItems)
  return (

    <Context.Provider value={{
      allPics,
      toggleFavorite,
      addCartItems,
      cartItems,
      emptyCart,
      removeCartItem,
      cartPrice
    }}  >
      {props.children}
    </Context.Provider>

  )

}

export { Provider, Context }