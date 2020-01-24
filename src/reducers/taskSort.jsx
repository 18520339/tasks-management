/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

const initialState = { by: 'name', value: 1 };
const taskSort = (state = initialState, action) => {
	switch (action.type) {
		case types.SORT_TABLE:
			var { by, value } = action;
			return { by, value };
		default:
			return state;
	}
};

export default taskSort;

/* eslint-enable */
