import React from 'react';
import LoginLink from './NavBarLinks/LoginLink'
import SignUpBtn from './NavBarLinks/SignUpBtn'
import DevLink from './NavBarLinks/DevLinks'
import AboutLink from './NavBarLinks/AboutLink'

const NavBar = () => {
	return (
		<header>
			<nav>
				<div className="nav-wrapper">
					<div className="container">
						<a href="#" className="brand-logo">Logo</a>
						<ul id="nav-mobile" className="left hide-on-med-and-down">
							<AboutLink />
							<DevLink />
						</ul>						
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<LoginLink />
							<SignUpBtn />
						</ul>			
					</div>
				</div>
			</nav>			
		</header>
	)
}

export default NavBar