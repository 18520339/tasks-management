/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

const initialState = '';
const taskSearch = (state = initialState, action) => {
	switch (action.type) {
		case types.SEARCH_TABLE:
			return action.keyword;
		default:
			return state;
	}
};

export default taskSearch;

/* eslint-enable */
