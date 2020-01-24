/* jshint esversion: 9 */
/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from './reducers';
import * as actions from './actions';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { SearchCtrl, SortCtrl } from './components/TaskControls';

function App() {
	const store = useContext(StoreContext);
	const { taskEdited, isDisplayForm } = store.state;
	const dispatch = {
		onOpenForm: () => store.dispatch(actions.openForm()),
		onToggleForm: () => store.dispatch(actions.toggleForm()),
		onEditTask: task => store.dispatch(actions.editTask(task))
	};

	const [tasks, setTasks] = useState([]);
	const [sortCondition, setSortCondition] = useState({
		by: 'name',
		value: 1
	});

	const onToggleForm = () => {
		if (taskEdited && taskEdited.id != '') dispatch.onOpenForm();
		else dispatch.onToggleForm();
		dispatch.onEditTask({ id: '', name: '', status: false });
	};

	/* ------------------------- Task List -----------------------*/

	const randomId = () => Math.floor(Math.random() * 0x10000).toString(16);
	const generateId = () => [randomId(), randomId(), randomId()].join('-');

	const saveTasks = newTasksList => {
		setTasks(newTasksList);
		localStorage.setItem('tasks', JSON.stringify(newTasksList));
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
		saveTasks([...tasks, ...randomTasks]);
	};
	const onDeleteAllTasks = () => saveTasks([]);

	const onSort = sort => {
		setSortCondition({ ...sortCondition, by: sort.by, value: sort.value });
	};

	/* ---------------------------------------------------------- */

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
							<SortCtrl onSort={onSort} />
						</div>
					</div>
					<div className='row'>
						<br />
						<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
							<TaskList sort={sortCondition} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

/* eslint-enable */
