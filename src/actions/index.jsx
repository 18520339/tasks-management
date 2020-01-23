/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

export const openForm = () => {
	return { type: types.OPEN_FORM };
};

export const closeForm = () => {
	return { type: types.CLOSE_FORM };
};

export const toggleForm = () => {
	return { type: types.TOGGLE_FORM };
};

export const submitForm = task => {
	return { type: types.SUBMIT_FORM, task };
};

export const editTask = task => {
	return { type: types.EDIT_TASK, task };
};

export const deleteTask = id => {
	return { type: types.DELETE_TASK, id };
};

export const updateStatus = id => {
	return { type: types.UPDATE_STATUS, id };
};

/* eslint-enable */
