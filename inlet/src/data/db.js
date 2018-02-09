'use strict';

const fs = require('fs');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

let dataPath = path.join(__dirname, '../../db/');
let sourceDb = path.join(dataPath, 'source.db.json');
let instanceDb = path.join(dataPath, 'db.json');
let db;

reset();

/**
 * Reset DB - write contents of source file into it
 */
function reset() {
	if (copySync(sourceDb, instanceDb)) {
		console.log('>> Copied fresh database to ' + instanceDb); // eslint-disable-line no-console
	} else {
		throw new Error('ERROR: Unable to copy source database: ' + sourceDb);
	}
}

/**
 * Establish database connection
 */
function connection() {
	if (!db) {
		
		db = lowdb(new FileSync(instanceDb));
		db._.mixin(require('lodash-id'));
	}

	return db;
}

/**
 * Copy database on startup - this *HAS* to be sync or else the export does not work
 */
function copySync(src, dest) {
	if (!fs.existsSync(src)) { // eslint-disable-line no-sync
		return false;
	}

	// Remove old DB if it already exists
	if (fs.existsSync(dest)) { // eslint-disable-line no-sync
		fs.unlinkSync(dest); // eslint-disable-line no-sync
	}

	// NOTE: This does read file into memory, but it was the only sync way to do it
	fs.writeFileSync(dest, fs.readFileSync(src, 'utf-8')); // eslint-disable-line no-sync
	db = null; // Clear 'db' reference for 'connection' to re-establish

	return true;
}

module.exports = {
	connection,
	reset
};
