/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

const initialState = true;
export default isDisplayForm = (state = initialState, action) => {
	switch (action.type) {
		case types.OPEN_FORM:
			return true;
		case types.CLOSE_FORM:
			return false;
		case types.TOGGLE_FORM:
			return !state;
		default:
			return state;
	}
};

/* eslint-enable */
