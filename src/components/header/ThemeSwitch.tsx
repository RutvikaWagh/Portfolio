/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Theme switch
 */

import React, { useEffect, useState } from 'react';

import Dark from 'components/icons/Dark';
import { THEME } from 'constants/theme';
import Light from 'components/icons/Light';

const enum Mode {
	dark = 'dark',
	light = 'light',
}

const ThemeSwitch: React.FC = () => {
	const [mode, setMode] = useState(Mode.light);

	useEffect(() => {
		setTheme(THEME.light);
	}, []);

	const setTheme = (theme: Record<string, string>) => {
		const root = document.getElementById('root');

		Object.entries(theme).forEach(([name, value]) => {
			root?.style.setProperty(name, value);
		});
	};

	const handleClick = () => {
		if (mode === Mode.light) {
			setMode(Mode.dark);
			setTheme(THEME.dark);
		} else {
			setMode(Mode.light);
			setTheme(THEME.light);
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
