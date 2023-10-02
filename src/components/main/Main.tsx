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
		<main className='max-width-900px margin-auto'>
			<About />
			<Projects />
			<Education />
			<Certifications />
		</main>
	);
};

export default Main;
