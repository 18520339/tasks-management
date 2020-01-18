// eslint-disable-next-line
{/* eslint-disable */ }
import React, { useState } from 'react';

function TaskForm(props) {
    const [task, setTask] = useState({ name: '', status: false })
    const onClose = props.onClose
    const onChange = event => {
        var target = event.target
        var field = target.name
        var value = field == 'status' ? Boolean(target.value) : target.value
        setTask({ ...task, [field]: value })
    }
    const onClear = () => setTask({ ...task, name: '', status: false })
    const onSubmit = event => {
        event.preventDefault()
        if (task.name != '') {
            props.onSubmit(task)
            onClear()
        }
    }
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Add task
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
                            <i className="fas fa-plus"></i>&nbsp; Add
                        </button> &nbsp;
                        <button type="button" className="btn btn-danger" onClick={onClear}>
                            <i className="fas fa-times"></i>&nbsp; Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
{/* eslint-enable */ }