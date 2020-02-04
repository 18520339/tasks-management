/* jshint esversion: 9 */
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTable, searchTable } from '../../actions';

export default function Search() {
	const { taskFilter, taskSearch } = useSelector(state => state);
	const dispatch = useDispatch();
	const [keyword, setKeyword] = useState('');

	const onSearch = () => {
		dispatch(filterTable({ ...taskFilter, name: taskSearch }));
	};

	const onChange = event => {
		var target = event.target;
		var value = target.value;
		setKeyword(value);
	};

	useEffect(() => {
		dispatch(searchTable(keyword.toLowerCase().trim()));
	}, [keyword]);

	return (
		<div className='input-group'>
			<input
				type='text'
				name='keyword'
				className='form-control'
				value={keyword}
				onChange={onChange}
				placeholder='Type to search...'
			/>
			<span className='input-group-btn'>
				<button
					type='button'
					className='btn btn-primary'
					onClick={onSearch}
				>
					<i className='fas fa-search'></i>
				</button>
			</span>
		</div>
	);
}

/* eslint-enable */
