import React, { useEffect, useState } from 'react'
import AddItemForm from './AddItemForm'
import ItemList from './ItemList'

function ItemsApp() {
    const [items, setItems] = useState([])
    const addItem = (item) => {
        // assuming no duplicates for demo purposes
        setItems([...items, item])
    }

    const removeItem = (itemToBeDeleted) => {
        setItems(items.filter((item) => itemToBeDeleted !== item))
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'))
        if (items) {
            setItems(items)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])
    // [items] dependency must be passed in as 2nd argument, so that useEffect runs only when items changes
    // pass in [] as parameter to run useEffect only once

    return (
        <div className="itemsApp">
            <header className="itemsApp-header">
                <h1>To Do items</h1>
            </header>

            <div className="itemsApp-body">
                <ItemList items={items} removeItem={removeItem} />
            </div>
            <div className="itemsApp-form">
                <AddItemForm addItem={addItem} />
            </div>
        </div>
    )
}

export default ItemsApp
