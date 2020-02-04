/* jshint esversion: 9 */
/* eslint-disable */

const randomId = () => Math.floor(Math.random() * 0x10000).toString(16);
export const generateId = () => [randomId(), randomId(), randomId()].join('-');

/* eslint-enable */
