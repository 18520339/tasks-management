/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

const initialState = { id: '', name: '', status: false };
const taskSort = (state = initialState, action) => {
	switch (action.type) {
		case types.SORT_TABLE:
			return action.task;
		default:
			return state;
	}
};

export default taskSort;

/* eslint-enable */
