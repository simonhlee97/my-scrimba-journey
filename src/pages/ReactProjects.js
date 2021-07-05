import React, { useState, useCallback } from 'react'
import SubMenu from '../global-components/SubMenu'
import { GrNotes } from 'react-icons/gr'
import { CgNotes } from 'react-icons/cg'
import { BiCameraMovie } from 'react-icons/bi'
import { GoProject } from 'react-icons/go'
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import MovieApp from './MovieApp'
import Netflix from '../react-projects/Netflix'
import Todos from '../react-projects/Todos'

export default function ReactProjects() {
	const [activeComponent, setActiveComponent] = useState('movieapp')

	const modifyActiveComponent = useCallback(
		(newActiveComponent) => {
			setActiveComponent(newActiveComponent)
		},
		[setActiveComponent]
	)

	return (
		<>
			<div className="container">
				<h2 className="text-center title">React Projects</h2>
				<SubMenu>
					<nav>
						<ul>
							<li>
								<span
									className="submenu-btn"
									onClick={() => modifyActiveComponent('movieapp')}>
									<BiCameraMovie />
									Movie Search App
								</span>
							</li>
							<li>
								<span
									className="submenu-btn"
									onClick={() => modifyActiveComponent('netflix')}>
									<BiCameraMovie />
									Netflix Clone Project
								</span>
							</li>
							<li>
								<span
									className="submenu-btn"
									onClick={() => modifyActiveComponent('todos')}>
									<CgNotes />
									Todos App
								</span>
							</li>
						</ul>
					</nav>
				</SubMenu>
			</div>
			{activeComponent === 'movieapp' && <MovieApp />}
			{activeComponent === 'netflix' && <Netflix />}
			{activeComponent === 'todos' && <Todos />}
		</>
	)
}
