/* jshint esversion: 6 */
/* eslint-disable */

import React from "react";
import TaskItem from "./../TaskItem";

function TaskList(props) {
    const { tasks, onUpdateStatus, onEditTask, onDeleteTask } = props;
    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">Id</th>
                    <th className="text-center">Task name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center">
                        <h5>0</h5>
                    </td>
                    <td>
                        <input type="text" className="form-control" />
                    </td>
                    <td>
                        <select className="form-control">
                            <option value="-1">All</option>
                            <option value="0">Finished</option>
                            <option value="1">Unfinished</option>
                        </select>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <i className="fas fa-exchange-alt">&ensp;</i>
                            Change theme
                        </button>
                    </td>
                </tr>
                {tasks.map((task, index) => {
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

export default TaskList;
/* eslint-enable */
