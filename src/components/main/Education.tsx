/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Education
 */

import React from 'react';

const Education: React.FC = () => {
	return (
		<section id='education' className='flex'>
			<img
				src='https://cdn.pixabay.com/photo/2013/01/29/00/47/magnifying-glass-76520_640.png'
				width='400px'
				alt='test image'
			/>
			<div>
				<h2 className='heading-h2'>Education</h2>
				<h3>Cummins college of Engineering for Women, Pune</h3>
				<p>Bachelor of Technology (B.Tech)</p>
				<p>Computer Science and Engineering</p>
				<p>CGPA – 8.1 / 10.0</p>
				<p>October 2022 – Present</p>
			</div>
		</section>
	);
};

export default Education;
