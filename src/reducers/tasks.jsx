/* jshint esversion: 9 */
/* eslint-disable */

import * as types from '../constants';

const tasksInCookies = localStorage.getItem('tasks');
const initialState = tasksInCookies ? JSON.parse(tasksInCookies) : [];

const randomId = () => Math.floor(Math.random() * 0x10000).toString(16);
const generateId = () => [randomId(), randomId(), randomId()].join('-');

export default tasks = (state = initialState, action) => {
	switch (action.type) {
		case types.SHOW_LIST:
			return state;
		case types.ADD_TASK: {
			var newTask = {
				id: generateId(),
				name: action.task.name,
				status: action.task.status
			};
			state.push(newTask);
			localStorage.setItem('tasks', JSON.stringify(state));
			return state;
		}
		default:
			return state;
	}
};

/* eslint-enable */
