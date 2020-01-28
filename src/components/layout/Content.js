/* jshint esversion: 9 */
/* eslint-disable */

import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = () => (
	<section>
		<Sidebar />
		<Tasks />
	</section>
);

/* eslint-enable */
