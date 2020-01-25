/* jshint esversion: 9 */
/* eslint-disable */

import React, { useContext } from 'react';
import { StoreContext } from '../../reducers';
import * as actions from '../../actions';
import TaskItem from '../TaskItem';

function TaskList() {
	const store = useContext(StoreContext);
	const { tasks, taskFilter, taskSort } = store.state;
	const dispatch = {
		onFilter: filter => store.dispatch(actions.filterTable(filter))
	};

	const onChange = event => {
		var target = event.target;
		var field = target.name;
		var value = target.value;
		value = field == 'status' ? +value : value;
		dispatch.onFilter({ ...taskFilter, [field]: value });
	};

	return (
		<table className='table table-striped table-bordered table-hover'>
			<thead>
				<tr>
					<th className='text-center'>Id</th>
					<th className='text-center'>Task name</th>
					<th className='text-center'>Status</th>
					<th className='text-center'>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className='text-center'>
						<h5>0</h5>
					</td>
					<td>
						<input
							type='text'
							name='name'
							className='form-control'
							value={taskFilter.name}
							onChange={onChange}
						/>
					</td>
					<td>
						<select
							name='status'
							className='form-control'
							value={taskFilter.status}
							onChange={onChange}
						>
							<option value='-1'>All</option>
							<option value='1'>Finished</option>
							<option value='0'>Unfinished</option>
						</select>
					</td>
					<td className='text-center'>
						<button type='button' className='btn btn-warning'>
							<i className='fas fa-exchange-alt'></i>
							&nbsp; Change theme
						</button>
					</td>
				</tr>
				{tasks
					.filter(task => {
						var taskName = task.name;
						var filterName = taskFilter.name;
						taskName = taskName ? taskName.toLowerCase() : '';
						filterName = filterName ? filterName.toLowerCase() : '';
						return taskName.indexOf(filterName) != -1;
					})
					.filter(task => {
						if (taskFilter.status == -1) return task;
						return task.status == Boolean(taskFilter.status);
					})
					.sort((a, b) => {
						if (taskSort.by == 'name') {
							if (a.name > b.name) return taskSort.value;
							if (a.name < b.name) return -taskSort.value;
							else return 0;
						} else if (taskSort.by == 'status') {
							if (a.status > b.status) return -taskSort.value;
							if (a.status < b.status) return taskSort.value;
							else return 0;
						}
					})
					.map((task, index) => {
						return (
							<TaskItem key={task.id} index={index} task={task} />
						);
					})}
			</tbody>
		</table>
	);
}

export default TaskList;

/* eslint-enable */
