import React from 'react'

const Item = ({ item, removeItem }) => {
    return (
        <div>
            <span>{item}</span>
            <button onClick={() => removeItem(item)}>Delete</button>
        </div>
    )
}

export default Item
