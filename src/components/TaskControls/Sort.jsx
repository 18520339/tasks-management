/* jshint esversion: 9 */
/* eslint-disable */

import React, { useState, useEffect } from 'react';

function Sort(props) {
	const [sort, setSort] = useState({ by: 'name', value: 1 });
	const onSort = (by, value) => setSort({ ...sort, by, value });
	useEffect(() => props.onSort(sort), [sort]);

	return (
		<div className='dropdown'>
			<button
				className='btn btn-primary dropdown-toggle'
				type='button'
				id='sortMenu'
				data-toggle='dropdown'
			>
				Sort by &nbsp;<i className='far fa-caret-square-down'></i>
			</button>
			<ul className='dropdown-menu' aria-labelledby='sortMenu'>
				<li onClick={() => onSort('name', 1)}>
					<a role='button'>
						<i className='fas fa-sort-alpha-down'>
							&emsp; A - Z &emsp;
						</i>
						{sort.by == 'name' && sort.value == 1 && (
							<i className='fas fa-check'></i>
						)}
					</a>
				</li>
				<li onClick={() => onSort('name', -1)}>
					<a role='button'>
						<i className='fas fa-sort-alpha-down-alt'>
							&emsp; Z - A &emsp;
						</i>
						{sort.by == 'name' && sort.value == -1 && (
							<i className='fas fa-check'></i>
						)}
					</a>
				</li>
				<li role='separator' className='divider'></li>
				<li onClick={() => onSort('status', 1)}>
					<a role='button'>
						Finished &emsp;
						{sort.by == 'status' && sort.value == 1 && (
							<i className='fas fa-check'></i>
						)}
					</a>
				</li>
				<li onClick={() => onSort('status', -1)}>
					<a role='button'>
						Unfinished &emsp;
						{sort.by == 'status' && sort.value == -1 && (
							<i className='fas fa-check'></i>
						)}
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Sort;

/* eslint-enable */
