/**
 * Data Utils
 */

'use strict';

const db = require('./db').connection;

/**
 * getCollectionDataByName
 * @param {String} name 
 */
function getCollectionDataByName(name) {
	return db().get(name + '.data');
}

module.exports = {
	getCollectionDataByName,
};
