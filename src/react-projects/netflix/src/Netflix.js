import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/home'
import { GlobalStyles } from './global-styles'
import * as ROUTES from './constants/routes'

function Netflix() {
    return (
        <div className="page-wrapper">
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path={ROUTES.SIGN_IN}>
                        <p>I will be the sign in page</p>
                    </Route>
                    <Route path={ROUTES.SIGN_UP}>
                        <p>I will be the sign up page</p>
                    </Route>
                    <Route path={ROUTES.BROWSE}>
                        <p>I will be the browse page</p>
                    </Route>
                    <Route path={ROUTES.HOME}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Netflix
