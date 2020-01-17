// eslint-disable-next-line
{/* eslint-disable */ }
import React from 'react';

function TaskItem() {
    return (
        <tr>
            <td className="text-center"><h5>1</h5></td>
            <td><h5>Học lập trình</h5></td>
            <td className="text-center">
                <h5><span className="label label-success">Activated</span></h5>
            </td>
            <td className="text-center" nowrap="nowrap">
                <button type="button" className="btn btn-info">
                    <i className="far fa-edit"></i>&nbsp; Edit
                </button> &nbsp;
                <button type="button" className="btn btn-danger">
                    <i className="far fa-trash-alt"></i>&nbsp; Delete
                </button>
            </td>
        </tr>
    );
}

export default TaskItem;
{/* eslint-enable */ }