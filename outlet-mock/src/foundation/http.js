import 'whatwg-fetch';

function get(url, opts) {
	return fetch(url, opts);
}

module.exports = {
	get,
};

