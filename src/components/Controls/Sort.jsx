// eslint-disable-next-line
{/* eslint-disable */ }
import React from 'react';

function Sort() {
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="sortMenu" data-toggle="dropdown">
                Sort by &nbsp;<i className="far fa-caret-square-down"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="sortMenu">
                <li>
                    <a role="button">
                        <i className="fas fa-sort-alpha-down">&emsp; A - Z</i>
                    </a>
                </li>
                <li>
                    <a role="button">
                        <i className="fas fa-sort-alpha-down-alt">&emsp; Z - A </i>
                    </a>
                </li>
                <li role="separator" className="divider"></li>
                <li><a role="button">Activated</a></li>
                <li><a role="button">Deactivated</a></li>
            </ul>
        </div>
    );
}

export default Sort;
{/* eslint-enable */ }