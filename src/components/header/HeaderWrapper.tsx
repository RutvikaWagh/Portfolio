/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Header Wrapper
 */

import React from 'react';

import Wave from './Wave';
import Header from './Header';

const HeaderWrapper: React.FC = () => {
	return (
		<header>
			<Wave />
			<Header />
		</header>
	);
};

export default HeaderWrapper;
