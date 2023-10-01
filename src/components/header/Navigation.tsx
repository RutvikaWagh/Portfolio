/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Navigation
 */

import React from 'react';

import ThemeSwitch from './ThemeSwitch';

const Navigation: React.FC = () => {
	return (
		<nav className='navbar'>
			<ul>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#projects'>Projects</a>
				</li>
				<li>
					<a href='#education'>Education</a>
				</li>
				<li>
					<a href='#certifications'>Achievement & Certificates</a>
				</li>
				<li>
					<ThemeSwitch />
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
