const http = require('../foundations/http');
const store = require('../foundations/store');

function getItems() {
	return http.get('http://localhost:8001/api/mock_items')
		.then(resp => {
			store.set('items', resp.data);
			return resp.data;
		});
}

module.exports = {
	getItems,
};


