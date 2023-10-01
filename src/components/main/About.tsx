/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description About
 */

import React from 'react';

const About: React.FC = () => {
	return (
		<div id='about'>
			<h1>Hi, This is Rutvika Wagh</h1>
			<p>
				A Second year under graduate at Cummins College of Engineering for Women, Pune Studying Computer
				Engineering
			</p>
			<div>
				<a className='resume-button' href=''>
					view Resume
				</a>
			</div>
		</div>
	);
};

export default About;
