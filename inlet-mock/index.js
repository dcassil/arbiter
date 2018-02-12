'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const DEFAULT_PORT = 8001;
const itemsApi = require('./src/api/routes/items');

const app = express();
const router = () => express.Router(); // eslint-disable-line new-cap

// Express Middleware
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Origin', 'http://localhost:8082');
	next();
});

// Express config
app.disable('x-powered-by');
app.set('trust proxy', 1);

app.use('/api/mock_items', itemsApi(router()));
//app.get('*', _serveStaticFile('../web/build/index.html'));

let server = app.listen(process.env.PORT || DEFAULT_PORT, () => {
	let host = server.address().address;
	let port = server.address().port;

	if (host === '::') {
		host = 'localhost';
	}

	console.log('App listening at http://%s:%s', host, port); // eslint-disable-line no-console
});

/**
 * Serve static file content and headers
 *
 * @param {String} file
 * @return {Function} Express.js middleware
 */
function _serveStaticFile(file) {
	return function(req, res) {
		let absoluteFilePath = path.join(__dirname, file);

		console.log('GET ', absoluteFilePath); // eslint-disable-line no-console

		res.sendFile(absoluteFilePath);
	};
}
