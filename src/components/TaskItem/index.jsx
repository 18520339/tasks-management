/* jshint esversion: 9 */
/* eslint-disable */

import React from 'react';

function TaskItem(props) {
	const { index, task } = props;
	const onUpdateStatus = () => props.onUpdateStatus(task.id);
	const onEditTask = () => props.onEditTask(task.id);
	const onDeleteTask = () => props.onDeleteTask(task.id);

	return (
		<tr>
			<td className='text-center'>
				<h5>{index + 1}</h5>
			</td>
			<td>
				<h5>{task.name}</h5>
			</td>
			<td className='text-center'>
				<h5 onClick={onUpdateStatus}>
					{task.status ? (
						<span className='label label-success'>Finished</span>
					) : (
						<span className='label label-danger'>Unfinished</span>
					)}
				</h5>
			</td>
			<td className='text-center' nowrap='nowrap'>
				<button
					type='button'
					className='btn btn-info'
					onClick={onEditTask}
				>
					<i className='far fa-edit'></i>
					&nbsp; Edit
				</button>
				&nbsp;
				<button
					type='button'
					className='btn btn-danger'
					onClick={onDeleteTask}
				>
					<i className='far fa-trash-alt'></i>
					&nbsp; Delete
				</button>
			</td>
		</tr>
	);
}

export default TaskItem;
/* eslint-enable */
