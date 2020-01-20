/* jshint esversion: 6 */
/* eslint-disable */

import React, { useState, useEffect } from "react";

function TaskForm(props) {
    const { taskEdited, onClose } = props;
    const [task, setTask] = useState({ id: "", name: "", status: false });

    const onClear = () => setTask({ ...task, id: "", name: "", status: false });
    const onChange = event => {
        var target = event.target;
        var field = target.name;
        var value = field == "status" ? Boolean(target.value) : target.value;
        setTask({ ...task, [field]: value });
    };

    const onSubmit = event => {
        event.preventDefault();
        if (task.name != "") {
            props.onSubmitForm(task);
            onClear();
        }
    };

    useEffect(() => {
        if (taskEdited) {
            var { id, name, status } = taskEdited;
            setTask({ ...task, id, name, status });
        } else onClear();
    }, [taskEdited]);

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {task.id == "" ? "Add task" : "Update task"}
                    <span
                        className="fas fa-times-circle pull-right "
                        role="button"
                        onClick={onClose}
                    ></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Task name :</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={task.name}
                            onChange={onChange}
                        />
                    </div>
                    <label>Status :</label>
                    <select
                        className="form-control"
                        required="required"
                        name="status"
                        value={task.status}
                        onChange={onChange}
                    >
                        <option value={true}>Finished</option>
                        <option value={false}>Unfinished</option>
                    </select>
                    <hr />
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">
                            {task.id == "" ? (
                                <span>
                                    <i className="fas fa-plus"></i>
                                    &nbsp; Add
                                </span>
                            ) : (
                                <span>
                                    <i className="fas fa-sync-alt"></i>
                                    &nbsp; Update
                                </span>
                            )}
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onClear}
                        >
                            <i className="fas fa-times"></i>&nbsp; Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
/* eslint-enable */
