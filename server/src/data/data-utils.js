/**
 * Data Utils
 */

'use strict';

const db = require('./db').connection;
const STATUS_CODE = {
	HTTP_200: 200,
	HTTP_201: 201,
	HTTP_404: 404,
	HTTP_500: 500,
};

/**
 * getCollectionDataByName
 * @param {String} name 
 */
function getCollectionDataByName(name) {
	return db().get(name + '.data');
}

/**
 * API success response and formatting
 */
function respondWith(res, obj, httpStatus = STATUS_CODE.HTTP_200) {
	res.status(httpStatus).json({
		data: obj
	});
}

module.exports = {
	getCollectionDataByName,
	respondWith,
};
