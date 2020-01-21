/* jshint esversion: 9 */
/* eslint-disable */

import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';

const appReducer = combineReducers({ tasks, isDisplayForm });

export default appReducer;

/* eslint-enable */
