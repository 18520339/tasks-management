/* jshint esversion: 9 */
/* eslint-disable */

import React from 'react';
import { firebase } from '../../firebase';

export const Checkbox = props => {
	const archivedTask = () => {
		firebase
			.firestore()
			.collection('tasks')
			.doc(props.id)
			.update({ archived: true });
	};

	return (
		<div
			className='checkbox-holder'
			data-testid='checkbox-action'
			onClick={archivedTask}
		>
			<span className='checkbox'></span>
		</div>
	);
};

/* eslint-enable */
