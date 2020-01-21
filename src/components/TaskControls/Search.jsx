/* jshint esversion: 9 */
/* eslint-disable */

import React, { useState } from 'react';

function Search(props) {
	const [keyword, setKeyword] = useState('');

	const onSearch = () => props.onSearch(keyword);
	const onChange = event => {
		var target = event.target;
		var value = target.value.toLowerCase();
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
