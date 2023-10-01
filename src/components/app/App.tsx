/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Application entry
 */

import React from 'react';

import 'css/style.css';
import Footer from 'components/footer/Footer';
import HeaderWrapper from 'components/header/HeaderWrapper';
import Main from 'components/main/Main';

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
