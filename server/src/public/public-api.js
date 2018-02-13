'use strict';

const items = require('./api/items');
// const router = () => express.Router(); // eslint-disable-line new-cap

module.exports = function itemsApi(app) {
	
	app.use('/public', items(app));

	return app;
};
