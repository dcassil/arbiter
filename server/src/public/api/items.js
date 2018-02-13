'use strict';

const dataUtils = require('../../data/data-utils'); 

module.exports = function itemsApi(app) {
	
	app.get('/items', (req, res) => {
		dataUtils.respondWith(res, { test: 'test' });
	});

	return app;
};


