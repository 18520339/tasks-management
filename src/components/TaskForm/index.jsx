// eslint-disable-next-line
{/* eslint-disable */ }
import React from 'react';

function TaskForm() {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading no">
                <h3 className="panel-title">
                    Add Task <i className="fas fa-times-circle pull-right"></i>
                </h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label>Task Name :</label>
                        <input type="text" className="form-control" />
                    </div>
                    <label>Status :</label>
                    <select className="form-control" required="required">
                        <option value="1">Activated</option>
                        <option value="0">Deactivated</option>
                    </select>
                    <hr />
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">
                            <i className="fas fa-plus"></i>&nbsp; Add
                    </button> &nbsp;
                    <button type="submit" className="btn btn-danger">
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