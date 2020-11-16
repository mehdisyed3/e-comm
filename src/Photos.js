import React, { useContext } from "react"
import { Context } from "./Context"
import ImageContainer from "./ImageContainer"
import getClass from "./getClass"

function Photos() {
    const context = useContext(Context)
    const { allPics } = context

    const images = allPics.map((item, index) => (
        <ImageContainer key={item.id} src={item.url} id={item.id} img={item} className={getClass(index)} />
    ))

    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos