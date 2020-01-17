// eslint-disable-next-line
{/* eslint-disable */ }
import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { SearchCtrl, SortCtrl } from './components/Controls'

function App() {
	return (
		<div className="container">
			<div className="text-center">
				<h1>Tasks Management</h1>
				<hr />
			</div>
			<div className="row">
				<div className="col-sm-4 col-md-4 col-lg-4 visible-sm-block visible-md-block visible-lg-block">
					<TaskForm />
				</div>
				<div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
					<button type="button" className="btn btn-primary">
						<i className="fas fa-plus"></i>&nbsp; Add Task
                	</button>
					<div className="row"><br />
						<div className="col-xs-12 visible-xs-block">
							<TaskForm />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
							<SearchCtrl />
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<SortCtrl />
						</div>
					</div>
					<div className="row"><br />
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<TaskList />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
{/* eslint-enable */ }