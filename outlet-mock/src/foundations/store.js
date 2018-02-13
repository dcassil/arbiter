const toystore = require('toystore');
const toystoreReact = require('toystore-react');

let store = toystore.create({
	items: [],
});

// Use partial application to add the 'subscribe' method from toystore-react, bound to this store
store.subscribe = (Component, mapping) => toystoreReact.subscribe(store, Component, mapping);

module.exports = store;
