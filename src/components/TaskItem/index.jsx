/* jshint esversion: 9 */
/* eslint-disable */

import React from 'react';
import { useDispatch } from 'react-redux';
import { updateStatus, editTask, openForm } from '../../actions';
import PropTypes from 'prop-types';

export default function TaskItem(props) {
	const dispatch = useDispatch();

	const { index, task } = props;
	const onUpdateStatus = () => {
		dispatch(updateStatus(task.id));
		var { id, name, status } = task;
		dispatch(editTask({ id, name, status }));
	};

	const onEdit = () => {
		dispatch(openForm());
		dispatch(editTask(task));
	};

	const onDelete = () => {
		dispatch(deleteTask(task.id));
		dispatch(editTask({ id: '', name: '', status: false }));
	};

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
				<button type='button' className='btn btn-info' onClick={onEdit}>
					<i className='far fa-edit'></i>&nbsp; Edit
				</button>
				&nbsp;
				<button
					type='button'
					className='btn btn-danger'
					onClick={onDelete}
				>
					<i className='far fa-trash-alt'></i>&nbsp; Delete
				</button>
			</td>
		</tr>
	);
}

TaskItem.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}).isRequired
};

/* eslint-enable */
