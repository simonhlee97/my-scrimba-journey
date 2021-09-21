import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
// import Home from './pages/home'
// import Signin from './pages/signin'
import { Home, Signin, Signup, Browse } from './pages'
import { GlobalStyles } from './global-styles'
import * as ROUTES from './constants/routes'
import { FirebaseContext } from './context/firebase'

import { useAuthListener } from './hooks'

var config = {
    apiKey: 'AIzaSyDcqD2-Xt1QNN5s15TEO3dPG0VmvHkO4LM',
    authDomain: 'simon-scrimba-netflx.firebaseapp.com',
    projectId: 'simon-scrimba-netflx',
    storageBucket: 'simon-scrimba-netflx.appspot.com',
    messagingSenderId: '369039523573',
    appId: '1:369039523573:web:cbd98ba8ff377d626fcfbc',
}

const firebase = window.firebase.initializeApp(config)

function Netflix() {
    const { user } = useAuthListener()
    return (
        <div className="page-wrapper">
            <FirebaseContext.Provider value={{ firebase: window.firebase }}>
                <GlobalStyles />
                <Router>
                    <Switch>
                        <Route path={ROUTES.SIGN_IN}>
                            <Signin />
                        </Route>
                        <Route path={ROUTES.SIGN_UP}>
                            <Signup />
                        </Route>
                        <Route path={ROUTES.BROWSE}>
                            <Browse />
                        </Route>
                        <Route path={ROUTES.HOME}>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </FirebaseContext.Provider>
        </div>
    )
}
export default Netflix
