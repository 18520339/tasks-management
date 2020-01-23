/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

const initialState = { id: '', name: '', status: false };
const taskEdited = (state = initialState, action) => {
	switch (action.type) {
		case types.EDIT_TASK:
			return action.task;
		default:
			return state;
	}
};

export default taskEdited;

/* eslint-enable */
