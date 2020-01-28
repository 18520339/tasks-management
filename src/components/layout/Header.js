/* jshint esversion: 9 */
/* eslint-disable */

import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => (
	<header className='header' data-test-id='header'>
		<nav>
			<div className='logo'>
				<img src='/images/logo.png' alt='Todolist' />
			</div>
			<div className='settings'>
				<li>+</li>
				<li>
					<FaPizzaSlice />
				</li>
			</div>
		</nav>
	</header>
);

/* eslint-enable */
