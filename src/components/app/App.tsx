/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Application entry
 */

import React from 'react';

import '../../css/style.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default App;
