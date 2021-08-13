import './App2.css'
import React from 'react'
import Header from '../src/global-components/Header'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import CourseNotes from './pages/CourseNotes'
import VanillaPage from './pages/VanillaPage'
import ReactProjects from './pages/ReactProjects'

const mainstyle = {
    color: '#f5f5f5',
    backgroundColor: '#212020',
    minHeight: '90vh',
}

function App() {
    return (
        <>
            <Header />
            <main style={mainstyle}>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/react">
                        <ReactProjects />
                    </Route>
                    <Route path="/notes">
                        <CourseNotes />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/vanilla">
                        <VanillaPage />
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default App
