/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Main
 */

import React from 'react';

const Main: React.FC = () => {
	return (
		<div className='max-width-900px margin-auto'>
			<div className='main'>
				<h1>Hi, This is Rutvika Wagh</h1>
				<h2>
					A Second year under graduate at Cummins College of Engineering for Women, Pune Studying Computer
					Engineering
				</h2>
				<p>I am based in Pune,Maharashtra</p>
				<p>My Native place in Dhule Maharashtra</p>
				<p>My aspirations are to Work towards creating software that makes life easier and more meaningful.</p>
				<div>
					<a className='btn' href=''>
						view Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Main;
