// eslint-disable-next-line
{/* eslint-disable */ }
import React from 'react';

function Search() {
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Type to search ..." />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button">
                    <i className="fas fa-search"></i>
                </button>
            </span>
        </div>
    );
}

export default Search;
{/* eslint-enable */ }