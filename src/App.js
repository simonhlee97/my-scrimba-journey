import './App.css'
import React from 'react'
import Header from '../src/global-components/Header'
import Footer from '../src/global-components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import { CSSTransition } from 'react-transition-group'
// import MovieApp from './pages/MovieApp'

// import ReactAdvancedPage from './pages/ReactAdvancedPage'
// import ReactBasicsPage from './pages/ReactBasicsPage'
import CourseNotes from './pages/CourseNotes'
import VanillaPage from './pages/VanillaPage'
import ReactProjects from './pages/ReactProjects'

const routes = [
	{ path: '/', name: 'Home', Component: HomePage },
	{ path: '/notes', name: 'Notes', Component: CourseNotes },
	{ path: '/about', name: 'About', Component: AboutPage },
	{ path: '/vanilla', name: 'Vanilla Projects', Component: VanillaPage },
	{ path: '/react', name: 'React Projects', Component: ReactProjects },
]

function App() {
	return (
		<>
			<Router>
				<Header />

				<main>
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={300}
								classNames="page"
								unmountOnExit>
								<div className="page">
									<Component />
								</div>
							</CSSTransition>
						)}
					</Route>
                ))}
                </main>
				<Footer />
			</Router>
		</>
	)
}

export default App
