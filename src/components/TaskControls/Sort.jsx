/* jshint esversion: 9 */
/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortTable } from '../../actions';

export default function Sort() {
	const { taskSort } = useSelector(state => state);
	const dispatch = useDispatch();

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
				<li onClick={() => dispatch(sortTable('name', 1))}>
					<a role='button'>
						<i className='fas fa-sort-alpha-down'>
							&emsp; A - Z &emsp;
						</i>
						{taskSort.by == 'name' && taskSort.value == 1 && (
							<i className='fas fa-check'></i>
						)}
					</a>
				</li>
				<li onClick={() => dispatch(sortTable('name', -1))}>
					<a role='button'>
						<i className='fas fa-sort-alpha-down-alt'>
							&emsp; Z - A &emsp;
						</i>
						{taskSort.by == 'name' && taskSort.value == -1 && (
							<i className='fas fa-check'></i>
						)}
					</a>
				</li>
				<li role='separator' className='divider'></li>
				<li onClick={() => dispatch(sortTable('status', 1))}>
					<a role='button'>
						Finished &emsp;
						{taskSort.by == 'status' && taskSort.value == 1 && (
							<i className='fas fa-check'></i>
						)}
					</a>
				</li>
				<li onClick={() => dispatch(sortTable('status', -1))}>
					<a role='button'>
						Unfinished &emsp;
						{taskSort.by == 'status' && taskSort.value == -1 && (
							<i className='fas fa-check'></i>
						)}
					</a>
				</li>
			</ul>
		</div>
	);
}

/* eslint-enable */
