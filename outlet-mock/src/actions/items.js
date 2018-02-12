import http from '../foundation/http';

function getItems() {
	return http.get('http://localhost:8001/api/mock_items');
}

module.exports = {
	getItems,
};


