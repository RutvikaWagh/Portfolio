/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Navigation
 */

import React from 'react';

const Navigation: React.FC = () => {
	return (
		<nav className='navbar'>
			<ul>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Experience</a>
				</li>
				<li>
					<a href='#'>Education</a>
				</li>
				<li>
					<a href='#'>Achievement & Certificates</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
