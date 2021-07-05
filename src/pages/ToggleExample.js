import React, { useState, useCallback } from 'react'
import Footer from '../global-components/Footer'
import Header from '../global-components/Header'

export default function ToggleExample() {
	const [activeComponent, setActiveComponent] = useState('projects')

	const modifyActiveComponent = useCallback(
		(newActiveComponent) => {
			setActiveComponent(newActiveComponent)
		},
		[setActiveComponent]
	)

	return (
		<>
			<div className="flex mb-0 items-center">
				<h2
					onClick={() => modifyActiveComponent('projects')}
					className="capitalize tracking-tight text-4xl mt-16 mr-8 md:mt-24 font-black hvr-underline-from-left pb-1">
					recent projects
				</h2>
				<h2
					onClick={() => modifyActiveComponent('open_source')}
					className="capitalize tracking-tight text-4xl mt-16 md:mt-24 font-black text-gray-400 hvr-underline-from-left pb-1">
					open source
				</h2>
			</div>
			{activeComponent === 'projects' && <Header />}
			{activeComponent === 'open_source' && <Footer />}
		</>
	)
}
