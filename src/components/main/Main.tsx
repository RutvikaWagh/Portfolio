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
		</div>
	);
};

export default Main;
