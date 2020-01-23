/* jshint esversion: 9 */
/* eslint-disable */

// Reference: https://gist.github.com/thchia/dd1bc8200fd8cff89cfa6c928983e5c4

import React, { createContext, useReducer } from 'react';
import tasks from './tasks';
import taskEdited from './taskEdited';
import isDisplayForm from './isDisplayForm';

const getInitialState = reducerDict => {
	return Object.keys(reducerDict).reduce((acc, curr) => {
		const slice = reducerDict[curr](undefined, { type: undefined });
		return { ...acc, [curr]: slice };
	}, {});
};

const combineReducers = reducerDict => {
	const _initialState = getInitialState(reducerDict);
	return (state = _initialState, action) => {
		return Object.keys(reducerDict).reduce((acc, curr) => {
			let slice = reducerDict[curr](state[curr], action);
			return { ...acc, [curr]: slice };
		}, state);
	};
};

const useStore = (rootReducer, state) => {
	const initialState = state || rootReducer(undefined, { type: undefined });
	return useReducer(rootReducer, initialState);
};

const rootReducer = combineReducers({ tasks, taskEdited, isDisplayForm });

export const StoreContext = createContext();
export const Provider = props => {
	const [state, dispatch] = useStore(rootReducer);
	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{props.children}
		</StoreContext.Provider>
	);
};

/* eslint-enable */
