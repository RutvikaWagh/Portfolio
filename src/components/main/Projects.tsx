/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Projects
 */

import React from 'react';

const Projects: React.FC = () => {
	return (
		<section id='projects' className='flex'>
			<img
				src='https://cdn.pixabay.com/photo/2013/01/29/00/47/magnifying-glass-76520_640.png'
				width='400px'
				alt='test image'
			/>
			<div>
				<h2 className='heading-h2'>Projects</h2>
				<div>My Project goes here</div>
			</div>
		</section>
	);
};

export default Projects;
