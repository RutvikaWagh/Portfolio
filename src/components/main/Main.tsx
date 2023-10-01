/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Main
 */

import React from 'react';

import About from './About';
import Certifications from './Certifications';
import Education from './Education';
import Projects from './Projects';

const Main: React.FC = () => {
	return (
		<div className='max-width-900px margin-auto'>
			<About />
			<Projects />
			<Education />
			<Certifications />
		</div>
	);
};

export default Main;
