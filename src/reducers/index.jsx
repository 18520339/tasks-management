/* jshint esversion: 9 */
/* eslint-disable */

// Reference: https://gist.github.com/thchia/dd1bc8200fd8cff89cfa6c928983e5c4
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
