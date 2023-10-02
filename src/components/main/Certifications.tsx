/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Certifications
 */

import React from 'react';

const Certifications: React.FC = () => {
	return (
		<div id='certifications'>
			<p>My Achievements Goes Here:</p>
			<li>
				<b>Gold Badge </b>on HackerRank for Java
			</li>
			<img
				src='https://media.licdn.com/dms/image/sync/D5627AQEctBFCFPgrfw/articleshare-shrink_800/0/1695961033648?e=1696834800&v=beta&t=AkKyhrYjF5Erplr7jEP0G__6rdvJG39EoNZCtusVxUI'
				width='200px'
				alt='test image'
			/>
			<p>My Certifications Goes Here:</p>
			<li>Introduction to Python</li>
			<li>Introduction to CSS</li>
			<li>Introduction to JavaScript</li>
			<li>Introduction to Java</li>
			<li>Introduction to HTML</li>
		</div>
	);
};

export default Certifications;
