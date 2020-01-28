/* jshint esversion: 9 */
/* eslint-disable */

import { collatedTasks } from '../constants';

export const collatedTasksExist = selectedProject => {
	collatedTasks.find(task => task.key === selectedProject);
};

/* eslint-enable */
