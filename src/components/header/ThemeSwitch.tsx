/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Theme switch
 */

import React, { useState } from 'react';

import Dark from 'components/icons/Dark';
import Light from 'components/icons/Light';

const enum Mode {
	dark = 'dark',
	light = 'light',
}

const ThemeSwitch: React.FC = () => {
	const [mode, setMode] = useState(Mode.light);

	const handleClick = () => {
		if (mode === Mode.light) {
			setMode(Mode.dark);
		} else {
			setMode(Mode.light);
		}
	};

	const isLightMode = mode === Mode.light;
	const title = isLightMode ? 'Activate dark mode' : 'Activate light mode';

	return (
		<button aria-label={title} title={title} onClick={handleClick}>
			{isLightMode ? <Dark /> : <Light />}
		</button>
	);
};

export default ThemeSwitch;
