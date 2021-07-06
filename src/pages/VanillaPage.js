import React from 'react'
import { BiGame } from 'react-icons/bi'
import { AiOutlineDatabase } from 'react-icons/ai'
import SubMenu from '../global-components/SubMenu'
import Codepen from 'react-codepen-embed'

export default function VanillaPage() {
	return (
		<div className="container">
			<h2 className="text-center">Vanilla JS Projects</h2>
			<SubMenu>
				<nav className="menu-vanilla">
					<ul>
						<li className="submenu-btn">
							<BiGame /> Pacman
						</li>
						<li className="submenu-btn">
							<AiOutlineDatabase /> Momentum Project
						</li>
						<li className="submenu-btn">
							<BiGame /> Vanilla Ice
						</li>
					</ul>
				</nav>
			</SubMenu>

			<div className="momentum">
				<Codepen
					title="Momentum Clone"
					height={450}
					defaultTab="result"
					hash="NWjxqBq"
					user="simonhlee97"
					loader={() => <div>Loading...</div>}
				/>
			</div>
		</div>
	)
}
