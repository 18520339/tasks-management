/* jshint esversion: 9 */
/* eslint-disable */

import React, { createContext, useReducer } from 'react';
import { formReducer } from '../reducers';

export const FormContext = createContext();
export default FormProvider = props => {
	const [form, dispatch] = useReducer(formReducer, []);
	return (
		<FormContext.Provider value={{ form }}>
			{props.children}
		</FormContext.Provider>
	);
};

/* eslint-enable */
