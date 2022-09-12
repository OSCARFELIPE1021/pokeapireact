import React from 'react'
import './styles.css';


const NavBar = () => {
	
	

	return (
		<>
			<nav className="navbar">
				<div className="logo-container">
					<img src="/assets/logo.svg" alt="Logo" className="navbar-logo"></img>
					<span>pokeapi</span>
				</div>
				<div className="links-container">
					<ul className="navbar-links">
						<li><a className="navbar-link" href='#'>personajes</a></li>
						<li><a className="navbar-link" href='#'>tipos de pokemon</a></li>
						
						
					</ul>
				</div>
			</nav>
		</>
	)
}

export default NavBar;