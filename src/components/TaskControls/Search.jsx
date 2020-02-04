/* jshint esversion: 9 */
/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../reducers';
import * as actions from '../../actions';

export default function Search() {
	const store = useContext(StoreContext);
	const { taskFilter, taskSearch } = store.state;
	const dispatch = {
		onSearch: keyword => store.dispatch(actions.searchTable(keyword)),
		onFilter: filter => store.dispatch(actions.filterTable(filter))
	};

	const [keyword, setKeyword] = useState('');

	const onSearch = () => {
		dispatch.onFilter({ ...taskFilter, name: taskSearch });
	};

	const onChange = event => {
		var target = event.target;
		var value = target.value;
		setKeyword(value);
	};

	useEffect(() => {
		dispatch.onSearch(keyword.toLowerCase().trim());
	}, [keyword]);

	return (
		<div className='input-group'>
			<input
				type='text'
				name='keyword'
				className='form-control'
				value={keyword}
				onChange={onChange}
				placeholder='Type to search ...'
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
