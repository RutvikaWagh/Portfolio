/**
 * @author Rutvika Wagh <rutvikawagh@gmail.com>
 * @description Light switch
 */

import React from 'react';

const Light: React.FC = () => {
	return (
		<svg width='16' height='16' viewBox='0 0 20 20' style={{ transform: 'rotate(40deg)' }}>
			<mask id='moon-mask-main-nav'>
				<rect x='0' y='0' width='18' height='18' fill='#FFF'></rect>
				<circle cx='10' cy='2' r='8' fill='black' />
			</mask>
			<circle cx='9' cy='9' fill='var(--color-text)' mask='url(#moon-mask-main-nav)' r='8' />
			<g>
				<circle
					cx='17'
					cy='9'
					r='1.5'
					fill='var(--color-text)'
					style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
				/>
				<circle
					cx='13'
					cy='15.928203'
					r='1.5'
					fill='var(--color-text)'
					style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
				/>
				<circle
					cx='5'
					cy='15.928203'
					r='1.5'
					fill='var(--color-text)'
					style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
				/>
				<circle
					cx='1'
					cy='9'
					r='1.5'
					fill='var(--color-text)'
					style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
				/>
				<circle
					cx='5'
					cy='2.071797'
					r='1.5'
					fill='var(--color-text)'
					style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
				/>
				<circle
					cx='13'
					cy='2.071797'
					r='1.5'
					fill='var(--color-text)'
					style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
				/>
			</g>
		</svg>
	);
};

export default Light;
