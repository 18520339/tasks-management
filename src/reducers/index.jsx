/* jshint esversion: 9 */
/* eslint-disable */

import { combineReducers, createStore } from 'redux';

import tasks from './tasks';
import taskEdited from './taskEdited';
import taskFilter from './taskFilter';
import taskSearch from './taskSearch';
import taskSort from './taskSort';
import isDisplayForm from './isDisplayForm';

const rootReducer = combineReducers({
	tasks,
	taskEdited,
	taskFilter,
	taskSearch,
	taskSort,
	isDisplayForm
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

/* eslint-enable */
