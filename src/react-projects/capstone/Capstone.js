import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
// import styles from './cap.module.css'

function Capstone() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/react/buypics">
                    <Photos />
                </Route>

                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}
export default Capstone
