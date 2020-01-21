/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

export const showLists = () => {
	return {
		type: types.SHOW_LIST
	};
};

export const addTask = task => {
	return {
		type: types.ADD_TASK,
		task
	};
};

export const openForm = () => {
	return {
		type: types.OPEN_FORM
	};
};

export const closeForm = () => {
	return {
		type: types.CLOSE_FORM
	};
};

export const toggleForm = () => {
	return {
		type: types.TOGGLE_FORM
	};
};

/* eslint-enable */
