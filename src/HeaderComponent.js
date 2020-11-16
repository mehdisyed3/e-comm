import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from './Context'


function HeaderComponent() {
    const { cartItems } = useContext(Context)
    const Icon = cartItems.length ? 'fill' : 'line'

    return (
        <header>
            <Link to="/">
                <h2>Clicks to Pick</h2>
            </Link>
            <Link to="/photos" >
                <i className="ri-image-2-line ri-fw ri-2x"></i>
            </Link>
            <Link to='/cart'>
                <i className={`ri-shopping-cart-${Icon} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}










export default HeaderComponent

