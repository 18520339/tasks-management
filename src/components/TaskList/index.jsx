/* jshint esversion: 9 */
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TaskItem from '../TaskItem';

function TaskList(props) {
	const {
		tasks,
		keyword,
		sort,
		onUpdateStatus,
		onEditTask,
		onDeleteTask
	} = props;
	const [filter, setFilter] = useState({ name: '', status: -1 });

	const onChange = event => {
		var target = event.target;
		var field = target.name;
		var value =
			field == 'status' ? +target.value : target.value.toLowerCase();
		setFilter({ ...filter, [field]: value });
	};

	useEffect(() => setFilter({ ...filter, name: keyword }), [keyword]);

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
							value={filter.name}
							onChange={onChange}
						/>
					</td>
					<td>
						<select
							name='status'
							className='form-control'
							value={filter.status}
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
					// .filter(task => {
					// 	return (
					// 		task.name.toLowerCase().indexOf(filter.name) != -1
					// 	);
					// })
					// .filter(task => {
					// 	if (filter.status == -1) return task;
					// 	return task.status == Boolean(filter.status);
					// })
					// .sort((a, b) => {
					// 	if (sort.by == 'name') {
					// 		if (a.name > b.name) return sort.value;
					// 		if (a.name < b.name) return -sort.value;
					// 		else return 0;
					// 	} else if (sort.by == 'status') {
					// 		if (a.status > b.status) return -sort.value;
					// 		if (a.status < b.status) return sort.value;
					// 		else return 0;
					// 	}
					// })
					.map((task, index) => {
						return (
							<TaskItem
								key={index}
								index={index}
								id={task.id}
								name={task.name}
								isFinished={task.status}
								onUpdateStatus={onUpdateStatus}
								onEditTask={onEditTask}
								onDeleteTask={onDeleteTask}
							/>
						);
					})}
			</tbody>
		</table>
	);
}

const mapStateToProps = state => {
	return {
		tasks: state.tasks
	};
};

export default connect(mapStateToProps, null)(TaskList);

/* eslint-enable */
