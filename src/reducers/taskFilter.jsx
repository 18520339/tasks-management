/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

const initialState = { name: '', status: -1 };
const taskFilter = (state = initialState, action) => {
	switch (action.type) {
		case types.FILTER_TABLE:
			return action.filter;
		default:
			return state;
	}
};

export default taskFilter;

/* eslint-enable */
