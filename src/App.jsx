/* jshint esversion: 9 */
/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { openForm, toggleForm, editTask, randomTasks } from './actions';
import { generateId } from './utils';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { SearchCtrl, SortCtrl } from './components/TaskControls';

export default function App() {
	const { tasks, taskEdited, isDisplayForm } = useSelector(state => state);
	const dispatch = useDispatch();

	const onToggleForm = () => {
		if (taskEdited && taskEdited.id != '') dispatch(openForm());
		else dispatch(toggleForm());
		dispatch(editTask({ id: '', name: '', status: false }));
	};

	const onGenerateTasks = () => {
		var randomTasks = [
			{ id: generateId(), name: '1 vợ', status: true },
			{ id: generateId(), name: '2 con', status: false },
			{ id: generateId(), name: '3 lầu', status: false },
			{ id: generateId(), name: '4 bánh', status: true },
			{ id: generateId(), name: '5 sao', status: false },
			{ id: generateId(), name: '6 số', status: true }
		];
		dispatch(randomTasks([...tasks, ...randomTasks]));
	};

	const onDeleteAllTasks = () => dispatch(randomTasks([]));

	return (
		<div className='container'>
			<div className='text-center'>
				<h1>Tasks Management</h1>
				<hr />
			</div>
			<div className='row'>
				<div className='col-sm-4 col-md-4 col-lg-4 visible-sm-block visible-md-block visible-lg-block'>
					<TaskForm />
				</div>
				<div
					className={
						isDisplayForm
							? 'col-sm-8 col-md-8 col-lg-8 '
							: 'col-sm-12 col-md-12 col-lg-12 col-xs-12'
					}
				>
					<button
						type='button'
						className='btn btn-primary'
						onClick={onToggleForm}
					>
						<i className='fas fa-plus'></i>
						&nbsp; Add task
					</button>
					&nbsp;
					<button
						type='button'
						className='btn btn-success'
						onClick={onGenerateTasks}
					>
						<i className='fas fa-random'></i>
						&nbsp; Generate tasks
					</button>
					&nbsp;
					<button
						type='button'
						className='btn btn-danger'
						onClick={onDeleteAllTasks}
					>
						<i className='far fa-calendar-times'></i>
						&nbsp; Delete all tasks
					</button>
					<div className='row'>
						<br />
						<div className='col-xs-12 visible-xs-block'>
							<TaskForm />
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-7 col-sm-8 col-md-8 col-lg-8'>
							<SearchCtrl />
						</div>
						<div className='col-xs-5 col-sm-4 col-md-4 col-lg-4'>
							<SortCtrl />
						</div>
					</div>
					<div className='row'>
						<br />
						<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
							<TaskList />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/* eslint-enable */
