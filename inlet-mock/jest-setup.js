'use strict';

const db = require('./src/data/db.js');

function dbReset() {
	
	db.reset();
}

module.exports = {
	dbReset,
};
