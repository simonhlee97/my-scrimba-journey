import React from 'react'
import '../css/footer.css'

export default function Footer() {
	return (
		<footer id='footer' className="footer">
			<a href="mailto:simonhlee97@hotmail.com" className="footer__link">
				simonhlee97@hotmail.com
			</a>
			<ul className="social-list">
				<li className="social-list__item">
					<a className="social-list__link" href="https://codepen.io">
						<i className="fab fa-codepen"></i>
					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="http://dribbble.com">
						<i className="fab fa-dribbble"></i>
					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="https://twitter.com">
						<i className="fab fa-twitter"></i>
					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="https://github.com">
						<i className="fab fa-github"></i>
					</a>
				</li>
			</ul>
		</footer>
	)
}