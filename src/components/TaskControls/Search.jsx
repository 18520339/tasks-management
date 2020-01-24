/* jshint esversion: 9 */
/* eslint-disable */

import React, { useState, useContext } from 'react';
import { StoreContext } from '../../reducers';
import * as actions from '../../actions';

function Search() {
	const store = useContext(StoreContext);
	const dispatch = {
		onSearch: keyword => store.dispatch(actions.searchTable(keyword))
	};

	const [keyword, setKeyword] = useState('');
	const onSearch = () => dispatch.onSearch(keyword.toLowerCase().trim());
	const onChange = event => {
		var target = event.target;
		var value = target.value;
		setKeyword(value);
	};

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

export default Search;

/* eslint-enable */
