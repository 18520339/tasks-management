// eslint-disable-next-line
{/* eslint-disable */ }
import React from 'react';
import TaskItem from './TaskItem';

function TaskList() {
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">Num</th>
                    <th className="text-center">Task Name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center"><h5>0</h5></td>
                    <td><input type="text" className="form-control" /></td>
                    <td>
                        <select className="form-control">
                            <option value="-1">All</option>
                            <option value="0">Activated</option>
                            <option value="1">Deactivated</option>
                        </select>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <i className="far fa-calendar-times"></i>&nbsp; Delete All Tasks
                         </button>
                    </td>
                </tr>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </tbody>
        </table>
    );
}

export default TaskList;
{/* eslint-enable */ }