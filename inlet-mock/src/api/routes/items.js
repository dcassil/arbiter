'use strict';

const dataUtils = require('../../data/data-utils');
const apitUtils = require('../api-utils');

const collection = 'mock_items';

module.exports = function itemsApi(app) {
	app.get('/', function(req, res) {
		let items = dataUtils.getCollectionDataByName(collection).value();
	
		apitUtils.respondWith(res, items);
	});

	return app;
};
