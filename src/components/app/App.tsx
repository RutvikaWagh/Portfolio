/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Application entry
 */

import React from 'react';

import '../../css/style.css';
import Footer from '../footer/Footer';
import HeaderWrapper from '../header/HeaderWrapper';
import Main from '../main/Main';

const App: React.FC = () => {
	return (
		<>
			<HeaderWrapper />
			<Main />
			<Footer />
		</>
	);
};

export default App;
