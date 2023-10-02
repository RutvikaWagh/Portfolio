/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Certifications
 */

import React from 'react';

const Certifications: React.FC = () => {
	return (
		<section id='certifications' className='flex'>
			<img
				src='https://media.licdn.com/dms/image/sync/D5627AQEctBFCFPgrfw/articleshare-shrink_800/0/1695961033648?e=1696834800&v=beta&t=AkKyhrYjF5Erplr7jEP0G__6rdvJG39EoNZCtusVxUI'
				width='400px'
				alt='test image'
			/>
			<div>
				<p>My Certifications Goes Here:</p>
				<ol>
					<li>Introduction to Python</li>
					<li>Introduction to CSS</li>
					<li>Introduction to JavaScript</li>
					<li>Introduction to Java</li>
					<li>Introduction to HTML</li>
				</ol>
			</div>
		</section>
	);
};

export default Certifications;
