/* jshint esversion: 9 */
/* eslint-disable */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../reducers';
import * as actions from '../../actions';

export default function TaskItem(props) {
	const store = useContext(StoreContext);
	const dispatch = {
		onOpenForm: () => store.dispatch(actions.openForm()),
		onUpdateStatus: id => store.dispatch(actions.updateStatus(id)),
		onEdit: task => store.dispatch(actions.editTask(task)),
		onDelete: id => store.dispatch(actions.deleteTask(id))
	};

	const { index, task } = props;
	const onUpdateStatus = () => {
		dispatch.onUpdateStatus(task.id);
		var { id, name, status } = task;
		dispatch.onEdit({ id, name, status });
	};

	const onEdit = () => {
		dispatch.onOpenForm();
		dispatch.onEdit(task);
	};

	const onDelete = () => {
		dispatch.onDelete(task.id);
		dispatch.onEdit({ id: '', name: '', status: false });
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
