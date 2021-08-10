import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/home'
import { GlobalStyles } from './global-styles'

function Netflix() {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path="/react/netflix/signin">
                        <p>I will be the sign in page</p>
                    </Route>
                    <Route path="/react/netflix/signup">
                        <p>I will be the sign up page</p>
                    </Route>
                    <Route path="/react/netflix/browse">
                        <p>I will be the browse page</p>
                    </Route>
                    <Route path="/react/netflix/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Netflix
