/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description About
 */

import React from 'react';

const About: React.FC = () => {
	return (
		<section id='about' className='flex'>
			<img
				src='https://cdn.pixabay.com/photo/2013/01/29/00/47/magnifying-glass-76520_640.png'
				width='400px'
				alt='test image'
			/>
			<div>
				<h2 className='heading-h2'>About Me</h2>
				<h1>Hi, This is Rutvika Wagh</h1>
				<p>
					I am a <span className='branch'>Computer Engineering </span> Second year under graduate student at
					Cummins College of Engineering for Women, Pune
				</p>

				<div>
					<a className='resume-button' href=''>
						view Resume
					</a>
				</div>
				<div>
					<ul>
						<li> Java</li>
						<li> C</li>
						<li> Python</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
