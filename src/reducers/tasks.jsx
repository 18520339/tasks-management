/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

const randomId = () => Math.floor(Math.random() * 0x10000).toString(16);
const generateId = () => [randomId(), randomId(), randomId()].join('-');
const tasksInCookies = localStorage.getItem('tasks');

const initialState = tasksInCookies ? JSON.parse(tasksInCookies) : [];
const tasks = (state = initialState, action) => {
	switch (action.type) {
		case types.SUBMIT_FORM:
			const { task } = action;
			task.name = task.name.trim();
			if (!task.id) {
				task.id = generateId();
				state.push(task);
			} else {
				var index = state.findIndex(item => item.id == task.id);
				state[index] = task;
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return state;
		case types.UPDATE_STATUS:
			var index = state.findIndex(task => task.id == action.id);
			if (index != -1) {
				state[index].status = !state[index].status;
				localStorage.setItem('tasks', JSON.stringify(state));
			}
			return state;
		case types.DELETE_TASK:
			var index = state.findIndex(task => task.id == action.id);
			if (index != -1) {
				state.splice(index, 1);
				localStorage.setItem('tasks', JSON.stringify(state));
			}
			return state;
		default:
			return state;
	}
};

export default tasks;

/* eslint-enable */
