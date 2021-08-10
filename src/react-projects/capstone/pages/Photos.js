import React, { useContext } from 'react'
import Image from '../components/Image'
import { Context } from '../Context'
import { getClass } from '../utils'
import '../grid.css'
function Photos() {
    const { allPhotos } = useContext(Context)

    const imageItems = allPhotos.map((img, i) => <Image key={img.id} img={img} className={getClass(i)} />)

    return <main className="photos">{imageItems}</main>
}

export default Photos
