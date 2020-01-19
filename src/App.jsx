// eslint-disable-next-line
{/* eslint-disable */ }
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { SearchCtrl, SortCtrl } from './components/Controls';

function App() {
	const [tasks, setTasks] = useState([])
	const [isDisplayForm, setIsDisplayForm] = useState(false)

	const onToggleForm = () => setIsDisplayForm(!isDisplayForm)
	const onCloseForm = () => setIsDisplayForm(false)

	const randomHexa = () => Math.floor(Math.random() * 0x10000).toString(16)
	const generateId = () => [randomHexa(), randomHexa(), randomHexa(), randomHexa(), randomHexa()].join('-')

	const onDeleteAllTasks = () => savedTasks([])
	const savedTasks = newTasks => {
		setTasks(newTasks)
		localStorage.setItem('tasks', JSON.stringify(newTasks))
	}

	const onGenerateTasks = () => {
		var randomTasks = [
			{ id: generateId(), name: 'Mua xe', status: true },
			{ id: generateId(), name: 'Sắm nhà lầu', status: false },
			{ id: generateId(), name: 'Cưới vợ', status: false },
			{ id: generateId(), name: 'Sinh con', status: true },
			{ id: generateId(), name: 'Đẻ cái', status: false },
			{ id: generateId(), name: 'Có cháu', status: true },
			{ id: generateId(), name: 'Thức dậy', status: true },
		]
		savedTasks([...tasks, ...randomTasks])
	}

	const onSubmitForm = newTask => {
		newTask.id = generateId()
		savedTasks([...tasks, newTask])
	}

	const onUpdateStatus = id => {
		var index = tasks.findIndex(task => task.id == id)
		if (index != -1) {
			tasks[index].status = !tasks[index].status
			savedTasks([...tasks])
		}
	}
	const onDeleteTask = id => {
		var index = tasks.findIndex(task => task.id == id)
		if (index != -1) {
			tasks.splice(index, 1)
			savedTasks([...tasks])
		}
	}
	useEffect(() => {
		var tasksInCookies = localStorage.getItem('tasks')
		if (localStorage && tasksInCookies) {
			tasksInCookies = JSON.parse(tasksInCookies)
			setTasks([...tasks, ...tasksInCookies])
		}
	}, [])

	return (
		<div className="container">
			<div className="text-center">
				<h1>Tasks Management</h1>
				<hr />
			</div>
			<div className="row">
				<div className={isDisplayForm ? 'col-sm-4 col-md-4 col-lg-4 visible-sm-block visible-md-block visible-lg-block' : 'hidden'}>
					<TaskForm onSubmit={onSubmitForm} onClose={onCloseForm} />
				</div>
				<div className={isDisplayForm ? 'col-sm-8 col-md-8 col-lg-8 ' : 'col-sm-12 col-md-12 col-lg-12 ' + 'col-xs-12'}>
					<button type="button" className="btn btn-primary" onClick={onToggleForm}>
						<i className="fas fa-plus"></i>&nbsp; Add task
                	</button> &nbsp;
					<button type="button" className="btn btn-success" onClick={onGenerateTasks}>
						<i className="fas fa-random"></i>&nbsp; Generate tasks
                	</button> &nbsp;
					<button type="button" className="btn btn-danger" onClick={onDeleteAllTasks}>
						<i className="far fa-calendar-times"></i>&nbsp; Delete all tasks
                	</button>
					<div className="row"><br />
						<div className="col-xs-12 visible-xs-block">
							{isDisplayForm ? <TaskForm onSubmit={onSubmitForm} onClose={onCloseForm} /> : ''}
						</div>
					</div>
					<div className="row">
						<div className="col-xs-7 col-sm-8 col-md-8 col-lg-8">
							<SearchCtrl />
						</div>
						<div className="col-xs-5 col-sm-4 col-md-4 col-lg-4">
							<SortCtrl />
						</div>
					</div>
					<div className="row"><br />
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<TaskList
								tasks={tasks}
								onUpdateStatus={onUpdateStatus}
								onDeleteTask={onDeleteTask}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
{/* eslint-enable */ }