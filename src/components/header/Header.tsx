/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Header
 */

import React from 'react';

import Name from './Name';
import Navigation from './Navigation';

const Header: React.FC = () => {
	return (
		<div className='header'>
			<div className='margin-auto max-width-900px'>
				<Name />
				<Navigation />
			</div>
		</div>
	);
};

export default Header;
